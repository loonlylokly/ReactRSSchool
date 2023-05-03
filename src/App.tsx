import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/404';
import AboutUs from './pages/AboutUs';
import AddCard from './pages/AddCard';
import Homepage from './pages/Homepage';

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/about-us'} element={<AboutUs />} />
          <Route path={'/add-card'} element={<AddCard />} />
          <Route path={'*'} element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
