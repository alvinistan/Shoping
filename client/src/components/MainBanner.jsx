import React from "react";
import { assets } from "../assets/assets";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="main"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="Sm"
        className="w-full hidden md:hidden"
      />
      <div>
        <h1>Freshness you can Trust, Savings you will love!</h1>
      </div>
      <div>
        <Link>Shop now <img/></Link>
      </div>
    </div>
    
  );
};

export default MainBanner;
