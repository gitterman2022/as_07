import React from 'react';
import Navse from '../../user/Navse/Navse';
import Footer from '../../user/pages/Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
    <Navse/>
    <div className="layoutContainer">
                {children}
            </div>
    <Footer/>
    </>
  );
};

export default Layout;