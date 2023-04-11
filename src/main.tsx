import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/Homepage';
import ErrorPage from './pages/404';
import AboutUs from './pages/AboutUs';
import AddCard from './pages/AddCard';
import Layout from './components/Layout';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="add-card" element={<AddCard />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
