import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

// import { Outlet } from 'react-router-dom';
// // import Footer from "./Footer/Footer";
// // import Header from "./Header/Header";

// const Layout = () => {
//   return (
//     <>
//       {/* <Header /> */}
//       <Outlet />
//       {/* <Footer /> */}
//     </>
//   );
// };

export default Layout;
