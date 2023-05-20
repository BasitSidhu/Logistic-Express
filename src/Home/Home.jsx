import React from 'react';
import BannerStart from '../Component/BannerStart/BannerStart';
import Blog from '../Component/Blog/Blog';
import Footer from '../Component/Footer/Footer';
import InfoTab from '../Component/InfoTab/InfoTab';
import Navbar from '../Component/Navbar/Navbar';
import Services from '../Component/Services/Services';
import TopBarStart from '../Component/Topbar/TopBarStart';


const Home = () => {
  return (
    <div>
        <TopBarStart />
        <Navbar />
        <InfoTab />
        <BannerStart />
        <Blog/>
        <Services />
        <Footer />
        
    </div>
  )
}

export default Home