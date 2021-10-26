import React, { useState } from "react";
import ItemsData from "./ItemsData";
import "antd/dist/antd.css";
import {
  EllipsisOutlined,
  UnorderedListOutlined,
  CaretLeftFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Select from "react-select";

export default function Product(props) {
  const [Grid, setGrid] = useState(true);
  const [dataObject, setdataObject] = useState(ItemsData);

  // const { selectedOption } = "Newest Articals"
  const List = () => {
    setGrid(false);
  };

  const grid = () => {
    setGrid(true);
  };

  function additem(item) {
    debugger;
    props.onProductState(item);
    console.log(props);
    const card = [];
    card.push(item);
  }

  function addDetails(item) {
    debugger;
    props.onProductState(item);
    console.log(props);

    // const details = [];
    // details.push(item);
  }

  function sortByRich(e) {
   
    if(e.value==="LH"){
      setdataObject((ItemsData) => {
        const dataToSort = [...ItemsData];
  
        const data = dataToSort.sort((a, b) =>  a.des_price - b.des_price);
  
        return data;
      });
    } else if(e.value==="HL"){
      setdataObject((ItemsData) => {
        const dataToSort = [...ItemsData];
  
        const data = dataToSort.sort((a, b) =>  b.des_price - a.des_price);
  
        return data;
      });

    }else if(e.value==="AZ"){
      setdataObject((ItemsData) => {
        debugger
        const dataToSort = [...ItemsData];
  
        const data = dataToSort.sort(function (a, b) {
          return a.title.localeCompare(b.title);
      });
  
        return data;
      });

    }else if(e.value==="ZA"){
      setdataObject((ItemsData) => {
        debugger
        const dataToSort = [...ItemsData];
  
        const data = dataToSort.sort(function (a, b) {
          return b.title.localeCompare(a.title);
      });
  
        return data;
      });

    }else if(e.value==="selected"){
      setdataObject(ItemsData);
    }
    
    
  }
  const options = [
    { value: "selected", label: "Newest Articals" },
    { value: "LH", label: "Low-High Price" },
    { value: "HL", label: "High-Low Price" },
    { value: "AZ", label: "A-Z Order" },
    { value: "ZA", label: "Z-A Order" },
  ];
  // const handleChange = (e) => {
  //   debugger;
  //   console.log(e);
  // };

  return (
    <>
      <div className="product-bg">
        <h1 className="product-h1">Products</h1>
        <div className="side-menu">
          <ul className="side-list">
            <Link to="./">
              <li>
                <CaretLeftFilled />
                Home
              </li>
            </Link>
            <Link to="./product">
              <li>
                <CaretLeftFilled />
                product
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="select-div">
        <label className="label-1">Sort by: </label>
        <Select
          className="test"
          // value={selectedOption}
          options={options}
          onChange={(e) => sortByRich(e)}
        />

        {/*         
        <select className="test"  >
          <option value="selected">Newest Articals</option>
          <option value="LH" >
            Low-High Price
          </option>
          <option value="HL">High-Low Price</option>
          <option value="AZ">A-Z Price</option>
          <option value="ZA">Z-A prise</option>
        </select> */}
        <label className="label-2">Showing: 1-8 items </label>
      </div>
      <div className="grid-list">
        <button className="grid-view cloc " onClick={grid}>
          <EllipsisOutlined />
        </button>
        <button className="list-view" onClick={List}>
          <UnorderedListOutlined />
        </button>
      </div>

      <div>
        {dataObject.map((item, index) => {
          return (
            <>
              {Grid ? (
                <div className="items-product">
                  <div className="Off">{item.offer}</div>
                  <div className="rating">{item.rating}</div>

                  <div>
                    <Link to={`/products/${item.id}`}>
                      <img
                        className="image"
                        src={item.pic}
                        alt=""
                        onClick={() => addDetails(item)}
                      />
                    </Link>
                  </div>
                  <div className="text-div-1">
                    <div>
                      <a href="./item">
                        <div className="prod-text">{item.title}</div>
                      </a>
                      <div className="actual-price">{item.actual_price}</div>
                      <div className="prod-price">{item.des_price}</div>
                    </div>
                    <button
                      className="prod-Button"
                      onClick={() => additem(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ) : (
                <div className="items-product2">
                  <div className="Off2">{item.offer}</div>
                  <div className="rating2">Rating {item.rating}</div>
                  <div>
                    <Link to={`/products/${item.id}`}>
                   <img className="image2" src={item.pic} alt=""  onClick={() => addDetails(item)} />
                    </Link>
                  </div>
                  <div className="text-div-1-2">
                    <div>
                      <div className="prod-text">{item.title}</div>
                      <div className="actual-price">{item.actual_price}</div>
                      <div className="prod-price">{item.des_price}</div>
                    </div>
                    <button
                      className="prod-Button2"
                      onClick={() => additem(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>

      {/* <Productitems /> */}
    </>
  );
}
