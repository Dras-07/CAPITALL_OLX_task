import React from 'react';
import BannerImg from '../images/banner.png';
import '../Stylesheet/Banner.css';
function Banner() {
  return (
    <div className="banner_container">
       <div className="banner">
       <img src={BannerImg} alt="OLX-CLONE-BANNER" className="HomeBanner" />
       </div>
       <div className="catgoriesavailable">

       <div className="categorytitle">
           <h2>All Categories</h2>
       </div>
       <div className="actualcategory">
         <h4 className="CategoriesinStock">Vehicles</h4>
         <h4 className="CategoriesinStock">Electronics</h4>
         <h4 className="CategoriesinStock">Furniture</h4>
       </div>
    </div>
    </div>
  );
};

export default Banner
