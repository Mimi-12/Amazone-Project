import React from "react";

import "./Home.css";
import Product from "../Product/Product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          showIndicators={false}
          showThumbs={false}
          className="home__image"
          autoPlay
          interval={2000}
          infiniteLoop={true}
        >
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
              // alt=""
            />
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
              // alt=""
            />
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
              // alt=""
            />
          </div>
        </Carousel>

        <div className="home__row">
          <Product
            id="4903851"
            title="1080P Business Webcam with Dual Microphone & Privacy Cover, NexiGo N660 USB FHD Web Computer Camera, Plug and Play, for Zoom/Skype/Teams/Webex, Laptop MAC PC Desktop"
            price={38.49}
            rating={4}
            image="https://m.media-amazon.com/images/I/61q9muyx+RL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445932"
            title="VIVO Black Height Adjustable 36 inch Stand up Desk Converter Quick Sit to Stand Tabletop Dual Monitor Riser, DESK-V000V Fabric"
            price={169.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61z1CrCjqRS._AC_SY450_.jpg"
          />
          <Product
            id="3254354345"
            title="2021 Newest Lenovo Ideapad 3 Laptop, 15.6 Full HD 1080P Non-Touch Display, AMD Ryzen 3 3250U Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, Webcam, Wi-Fi, HDMI, Windows 10 Home, KKE Mousepad, Grey
"
            price={519}
            rating={4}
            image="https://m.media-amazon.com/images/I/71WTF+xiiHL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Android 10.0 Tablet : MEBERRY 10 Ultra-Fast 4GB/RAM,64GB/ROM Tablets-8000mAh Battery-WiFi Support - Bluetooth Keyboard | Mouse | M7 Tablet Cover and More Include - Grey"
            price={159.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71g7DbH5lBL._AC_SX679_.jpg"
          />
          <Product
            id="49538094"
            title="HP 27 Pavilion All-in-One PC, 10th Gen Intel i7-10700T Processor, 16 GB RAM, Dual Storage 512 GB SSD and 1TB HDD, Full HD IPS 27 Inch Touchscreen, Windows 10 Home, Keyboard and Mouse (27-d0072, 2020)
"
            price={1630.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/91omRbBxtHS._AC_SX425_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Graco DuoGlider Double Stroller | Lightweight Double Stroller with Tandem Seating, Glacier"
            price={169.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91dwoBmSshL._SX466_.jpg"
          />
          <Product
            id="23445930"
            title="T-fal Signature Nonstick Dishwasher Safe Cookware Set, 12-Piece, Black"
            price={86.4}
            rating={5}
            image="https://m.media-amazon.com/images/I/81x3WzWy-LL._AC_SY450_.jpg"
          />
          <Product
            id="3254354345"
            title="FITUEYES TV Stand Tall Corner TV Stands for Most TVs up to 65 Inches Swivel TV Mount Stand with Height Adjustable Shelf Upgrade Sturdy Wood Base"
            price={87.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/6149dxsWK-L._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
