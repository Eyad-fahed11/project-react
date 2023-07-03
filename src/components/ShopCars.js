import React, { useState } from "react";

function MyShopCars(props) {
  // الاسم الاساسي 
  const [title, setTitle] = useState(props.name);
  // الاسم الثاني الي بستخدمه للكبسة الثالثة الي بستخدمها لاضهار السعر
  const [title2, setTitle2] = useState(props.name2);
  //السعر الساسي 
  const [price, setPrice] = useState(props.price);
  // السعر الثاني الي بستخدمه للكبسة الثالثة الي بستخدمها لاضهار السعر
  const [price2, setShowPrice] = useState(props.price2);
  // فنكشن اضافة السلعة 
  function Add() {
    let masseg = " do you want to continue ? " + title + " will be added ";
    // بستخدمها حتى  تطلع  مسج اذا بدي اكمل الاجراء او لا زي الترو والفولس
    let userrespons = window.confirm(masseg);
    if (userrespons) {
      alert(" good let's continue ");
      setTitle(title + " has been add ");
    } else {
      alert(" ok we will stop here thank you for your visit ");
    }
  }
  // فنكشن اخفاء السعر 
  function Hidden() {
    setPrice("Price is hidden");
  }
  // فنكشن اضهار السعر alert
  // ما بشتغل الا اذا كان السعر مخفي
  function ShowPr() {
    if (price == "Price is hidden") {
      alert("The Price of " + " " + "( " + title2 + " )" + " = " + price2);
    }

    if (price != "Price is hidden") {
    }
  }

  return (

    <div className="div-con">
      {/* props of title 1 */}
      <h3>{title}</h3>
      {/* props of title 2
      لكن مخفي بستخدمه في الكبسة الثالثة لاضهار السعر 
      */}
      <h3 hidden>{title2}</h3>
      {/* صور السيارات */}
      <img className="imggg" src={props.img} />
      {/* props of price 1 */}
      <h3 className="see">{price}</h3>
      {/* props of price 2
       لكن مخفي بستخدمه في الكبسة الثالثة لاضهار السعر
      */}
      <h3 hidden>{price2}</h3>
      {/* كبسة الاضافة */}
      <button onClick={Add}>Add item</button>
      {/* كبسة الاخفاء للسعر */}
      <button onClick={Hidden}>Hide the price</button>
      {/* كبسة اضهار السعر */}
      <button onClick={ShowPr}>Show the price</button>
    </div>
  );
}

export default MyShopCars;
