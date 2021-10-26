import React from "react";
import {
  MinusOutlined,
  PlusOutlined,
  CaretLeftFilled,
  CloseOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";


export default function Cart(props) {
  debugger
  
  const [cart,setCart]=React.useState(props.products);
  const [counter, setCounter] = React.useState(1);
  // let items = props.products;


  const incrementCounter =()=>{setCounter(counter + 1)}

  let  decrementCounter =()=>{
      debugger
    setCounter(counter - 1)}
  if(counter<0) {
    debugger
    decrementCounter = () => setCounter(1);
  }

  const removeitem=(removeCart)=>{
    debugger
    const newTodos = [...cart];
    newTodos.map((item,index)=>{
    if(item.id===removeCart.id){
      newTodos.splice(index,1 );
    }
    })
    setCart(newTodos);
    props.onRemovecart(removeCart);
  }
  const clearchat=()=>{
    debugger
    const clear =[...cart];
    clear.length=0;
    setCart(clear);
  }
  return (
    <>
      <div className="product-bg">
        <h1 className="product-h1">Cart</h1>
        <div className="side-menu">
          <ul className="side-list">
            <Link to="./">
              {" "}
              <li>
                <CaretLeftFilled />
                Home
              </li>
            </Link>
            <Link to="./cart">
              {" "}
              <li>
                <CaretLeftFilled />
                Cart
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <hr></hr>
      <div>
        <div className="cart-product-name">Product name</div>
        <ul>
          <li className="cart-li">Quantity</li>
          <li className="cart-li">Price</li>
          <li className="cart-li">Sub Total</li>
          <li className="cart-li">
            <button className="clear-button" onClick={clearchat}>CLEAR CHAT</button>
          </li>
        </ul>
      </div>
      <hr></hr>
      <table>
        <tbody>
          {cart &&
            cart.map((item, index) => {
              return (
                <tr className="flex" key={index}>
                  <td className="image-cart ">
                    <img src={item.pic} alt="" />
                  </td>
                  <td className="cart-name">{item.title}</td>

                  <td className="quantity-cart">
                    <MinusOutlined onClick={decrementCounter}/>{counter}<PlusOutlined 
                    onClick={incrementCounter}
                    />
                  </td>
                  <td className="actual-price-cart">${item.actual_price}</td>
                  <td className="price">${item.des_price}</td>
                  <td className="subtotal-cart">${item.sub_total*counter}</td>
                  <td className="removeicon">
                    <   CloseOutlined onClick={()=>removeitem(item)}/>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
     
      <button className="back-button">
        <Link to="/products">BACK TO SHOPING</Link>
      </button>
    </>
  );
          }