import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
// import { store } from '../src/store';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isTest = process.env.VITEST;

process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop';

/* Создаем сервер в который нужно передать корень приложения,
  тип билда(прода или разработка), и порт для хот модуль релоада(hmr)
*/
export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort
) {
  const resolve = (p) => path.resolve(__dirname, p);
  const app = express();

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite;
  if (!isProd) {
    /* Если не прода, то динамически импортируем vite,
      вызыве создание функцию создания сервера из импортированного vite
    */
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: 'custom',
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    /* Если это прод, то мы сжимаем сбилженное приложение
      и ??? */
    app.use((await import('compression')).default());
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      })
    );
  }

  /* Для любого пути ренднрим страницу */
  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template, render;
      if (!isProd) {
        /* Если не прода, билдим при помощи созданного ранее сервера vite каждый раз*/
        // always read fresh template in dev
        // Читаем шаблонный index.html
        template = fs.readFileSync(resolve('../index.html'), 'utf-8');
        // Зачем-то трансформируем шаблонный html
        template = await vite.transformIndexHtml(url, template);
        // Рендерим приложение с помощью vite
        render = (await vite.ssrLoadModule(resolve('../src/entry-server.tsx'))).render;
      } else {
        // template = indexProd;
        // Если прода, то берем темплейт из готового билда
        template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8');
        /* Ренднрим приложение без использования vite,
          потому что заранее сбилдили приложение с помощью vite
          и оно лежит в папку dist в виде js
        */
        render = (await import('./dist/server/entry-server.tsx')).render;
      }

      template = await vite.transformIndexHtml(url, template);
      const html = template.split('<!--app-html-->');
      res.write(html[0]);
      // Grab the initial state from our Redux store
      // const preloadedState = store.getState()

      // Send the rendered page back to the client
      // res.send(renderFullPage(html, preloadedState))
      const pipe = render(url, {
        onShellReady() {
          pipe(res);
        },
        onShellError(error) {
          console.error(`Something went wrong: ${error}`);
        },
        onAllReady() {
          res.write(html[1]);
          res.end();
        },
        onError(error) {
          res.statusCode = 500;
          console.log(error, 'error');
        },
      });
    } catch (e) {
      // Отлавливаем ошибки. Если не прода, то преобразовываем стэк ошибок при помощи vite
      !isProd && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(5173, () => {
      console.log('http://localhost:5173');
    })
  );
}
