import React from "react";
// استيراد ملف ال css
import "../components/OnlineShopCars.css";
// الصورة الحمرا الكبيرة 
import ggg from "../assets/image.media6.responsive_full_viewport_16_9.1669188103528.jpeg";
// صورة اللوقو الي جنب اسم المتجر
import lego from "../assets/amg-logo.svg";
// صور السيارات ال 9
import mercedes1 from "../assets/mercedes-1.webp";
import mercedes2 from "../assets/mercedes-2.webp";
import mercedes3 from "../assets/mercedes-3.webp";
import mercedes4 from "../assets/mercedes-4.webp";
import mercedes5 from "../assets/mercedes-5.webp";
import mercedes6 from "../assets/mercedes-6.webp";
import mercedes7 from "../assets/mercedes-7.webp";
import mercedes8 from "../assets/mercedes-8.webp";
import mercedes9 from "../assets/mercedes-9.webp";
import MyShopCars from "./ShopCars";
function MyOnline() {
  // array of object 
  const Eyad = [
    {
      name: "Mercedes amg 63 (2021)",
      name2: "Mercedes amg 63",
      img: mercedes1,
      price: "50.500$",
      price2: "50.500$",
    },
    {
      name: "Mercedes Gla (2019)",
      name2: "Mercedes Gla (2019)",
      img: mercedes2,
      price: "35.000$",
      price2: "35.000$",
    },
    {
      name: "Mercedes amg 63s sport (2023)",
      name2: "Mercedes amg 63s sport (2023)",
      img: mercedes3,
      price: "72.000$",
      price2: "72.000$",

    },
    {
      name: "Mercedes S Class Maybach (2023)",
      name2: "Mercedes S Class Maybach (2023)",
      img: mercedes4,
      price: "120.000$",
      price2: "120.000$",
    },
    {
      name: "Mercedes Class Maybach (2023)",
      name2: "Mercedes Class Maybach (2023)",
      img: mercedes5,
      price: "85.000$",
      price2: "85.000$",
    },
    {
      name: "Mercedes S Class 63 (2023)",
      name2: "Mercedes S Class 63 (2023)",
      img: mercedes6,
      price: "29.800$",
      price2: "29.800$",
    },
    {
      name: "Mercedes EQ-V Class (2022)",
      name2: "Mercedes EQ-V Class (2022)",
      img: mercedes7,
      price: "44.600$",
      price2: "44.600$",
    },
    {
      name: "Mercedes sports coupe (2020)",
      name2: "Mercedes sports coupe (2020)",
      img: mercedes8,
      price: "179.987$",
      price2: "179.987$",
    },
    {
      name: "Mercedes G Class (2023)",
      name2: "Mercedes G Class (2023)",
      img: mercedes9,
      price: "250.000$",
      price2: "250.000$",
    },
  ];
  return (
    <div>
      {/* اسم المتجر + صورة اللوقو */}
      <div className="contener">
        <h2>Eyad Mercedes Shop</h2>
        <img className="logo" src={lego} />
      </div>
      <div>
        {/* الصورة الكبيرة */}
        <img className="div-img" src={ggg} />
        <br />
        <br />
      </div>
      <MyShopCars name={Eyad[0].name} img={mercedes1} price={Eyad[0].price} price2={Eyad[0].price2} name2={Eyad[0].name2}/>
      <MyShopCars name={Eyad[1].name} img={mercedes2} price={Eyad[1].price} price2={Eyad[1].price2} name2={Eyad[1].name2}/>
      <MyShopCars name={Eyad[2].name} img={mercedes3} price={Eyad[2].price} price2={Eyad[2].price2} name2={Eyad[2].name2}/>
      <MyShopCars name={Eyad[3].name} img={mercedes4} price={Eyad[3].price} price2={Eyad[3].price2} name2={Eyad[3].name2}/>
      <MyShopCars name={Eyad[4].name} img={mercedes5} price={Eyad[4].price} price2={Eyad[4].price2} name2={Eyad[4].name2}/>
      <MyShopCars name={Eyad[5].name} img={mercedes6} price={Eyad[5].price} price2={Eyad[5].price2} name2={Eyad[5].name2}/>
      <MyShopCars name={Eyad[6].name} img={mercedes7} price={Eyad[6].price} price2={Eyad[6].price2} name2={Eyad[6].name2}/>
      <MyShopCars name={Eyad[7].name} img={mercedes8} price={Eyad[7].price} price2={Eyad[7].price2} name2={Eyad[7].name2}/>
      <MyShopCars name={Eyad[8].name} img={mercedes9} price={Eyad[8].price} price2={Eyad[8].price2} name2={Eyad[8].name2}/>
    </div>
  );
}

export default MyOnline;
