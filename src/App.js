import React,{useState} from "react";
import HeaderComponent from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

import "./App.css";
import "antd/dist/antd.css";
import "./components/product.css";
import "./components/Cart.css";
import "./components/home.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
let cartdata = [];
export default function App() {
  const [products, setProducts] = useState([]);
  const [detailsproduct, setDetailsProduct] = useState([]);
  
  const handleProduct = (e) => {
    debugger;
    if (cartdata.length > 0) {
      let cartdates = cartdata.filter((item) => item.id === e.id);
      if (cartdates.length === 0) {
        cartdata.push(e);
      }
      console.log(cartdates);
    } else {
      cartdata.push(e);
    }
    setProducts(cartdata);
    setDetailsProduct(cartdata);
    // setHomeProductDetails(cartdata);
  };
  
  const handleCart = (e) => {
    const newTodos = [...cartdata];
    newTodos.map((item, index) => {
      if (item.id === e.id) {
        newTodos.splice(index, 1);
      }
    });
    setProducts(newTodos);
  };

  const handleData = (e) => {
    debugger;
    if (cartdata.length > 0) {
      let cartdates = cartdata.filter((item) => item.id === e.id);
      if (cartdates.length === 0) {
        cartdata.push(e);
      }
      console.log(cartdates);
    } else {
      cartdata.push(e);
    }
    setDetailsProduct(cartdata);
    
  };
  

  return (
    <>
      <Router>
        <div>
          <HeaderComponent />
        </div>
        <Switch>
          <Route exact path="/" ><Home 
          detailsproduct={detailsproduct}  onProductData={(e)=>handleData(e)}
          /></Route>
          <Route path="/products/:id">
            {" "}
            <ProductDetails
              detailsproduct={detailsproduct}
             
            />
          </Route>
          <Route path="/products">
            <Product onProductState={(e) => handleProduct(e)} />
          </Route>
          <Route path="/cart">
            <Cart products={products} onRemovecart={(e) => handleCart(e)} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
