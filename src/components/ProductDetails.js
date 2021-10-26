import React from "react";

import { CaretLeftFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function ProductDetails(props) {
  debugger
 

  return (
    <>
      <div className="product-bg">
     
        <h1 className="product-h1">Product</h1>
        <div className="side-menu">
          <ul className="side-list">
            <Link to="./">
              {" "}
              <li>
                <CaretLeftFilled />
                Home
              </li>
            </Link>
            <Link to="./product">
              {" "}
              <li>
                <CaretLeftFilled />
                product
              </li>
            </Link>
            <li></li>
          </ul>
        </div>
      </div>
      <div>
     {props.detailsproduct.map((item, index) => {
              return (
                <>
        <div className="render-image-border">
          <img className="render-image" src={item.pic} alt="" />
        </div>
        <div className="content">
          <div>{item.title}</div>
          <div className="actual-price2">{item.actual_price}</div>
          <div className="prod-price2">{item.des_price}</div>
          <div className="desciption">
         {item.description} 
          </div>
          <div>
            Quantity
            <select className="test">
              <option value="selected">1</option>
              <option value="TWO">2</option>
              <option value="THREE">3</option>
              <option value="FOUR">4</option>
              <option value="FIVE">5</option>
            </select>
          </div>
          <hr></hr>
          <button className="prod-Button" >Add To Cart</button>
        </div>
        </>
         );
        })}
      </div>
      {/* <div>
      
       <div className="render-image-border">
        <img className="render-image" src="../img/03.jpg" alt="" />
      </div>
      <div className="content">
        <div>Super new Sneakers</div>
        <div className="actual-price2">30.00</div>
        <div className="prod-price2">6.00</div>
        <div className="desciption">The best sneakers you would ever find.</div>
        <div>
          quntity
          <select className="test">
            <option value="selected">1</option>
            <option value="LH">2</option>
            <option value="HL">3</option>
            <option value="AZ">4</option>
            <option value="ZA">5</option>
          </select>
        </div>
        <hr></hr>
        <button className="prod-Button" >Add To Cart</button>
      </div>
     
      </div> */}
    </>
  );
}
