import React from 'react';
import Layout from '../../../common/Layout/Layout';
import Category from '../../Category/Category';
import HeroSection from '../../HeroSection/HeroSection';
import Posts from '../../Posts/Posts';
import Brand from '../Brand/Brand';
import Gallery from '../Gallery/Gallery';
import './Home.css';

const Home = () => {
  return (
    <>
    <Layout>
      <HeroSection/>
      <Brand/>
      <div className="homeMainBody">
                    <div className="left">
                        <Posts/>
                    </div>
                    <div className="right">
                        <Category/>
                    </div>
                </div>
                <Gallery/>
    </Layout>    
    </>
  );
};

export default Home;