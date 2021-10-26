import React from "react";
import ItemsData from "./ItemsData";
import { Link } from "react-router-dom";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

export default function Home(props) {
  const [img, setImg] = React.useState(true);

  function addDetails(item) {
    debugger;
    props.onProductData(item);
    console.log(props);

    // const details = [];
    // details.push(item);
  }
  const img1 = () => {
    setImg(false);
  };

  const img2 = () => {
    setImg(true);
  };
  return (
    <>
      <div className="homeimage">
        <CaretLeftOutlined className="lefticon" onClick={img1} />
        {img ? (
          <img src="./img/02.png" alt="" />
        ) : (
          <img src="./img/01.png" alt="" />
        )}

        <CaretRightOutlined className="righticon" onClick={img2} />
      </div>
      <div className="devideitems">
        <h1 className="new-arrival">NEW ARRIVALS</h1>
        <h1 className="new-arrival">NEW ARRIVALS</h1>
        <h1 className="new-arrival">NEW ARRIVALS</h1>
      </div>

      <div className="itemsflex">
        {ItemsData.map((item, index) => {
          return (
            <>
              <div className="">
                <div>
                  <div className="homeitems">
                    <div>
                    <Link to={`/products/${item.id}`}>
                        <img className="item-image" src={item.pic} alt="" onClick={() => addDetails(item)}/>
                      </Link>
                    </div>
                    <Link to={`/products/${item.id}`}>
                      {" "}
                      <div className="item-name" onClick={() => addDetails(item)}>{item.title}</div>
                    </Link>
                    <div className="a-price">{item.actual_price}</div>
                    <div>{item.des_price}</div>
                  </div>
                  {/* <div className="main-div">
          <div>
            <img className="item-image" src="./img/15.jpg" alt=""  />
          </div>
          <div className="item-name">Magical Earrings</div>
          <div className="a-price">170.00</div>
          <div>150.00</div>
        </div>
        <div className="main-div">
          <div>
            <img className="item-image" src="./img/13.jpg" alt="" />
          </div>
          <div className="item-name">Pack It On Your Back</div>
          <div className="a-price">150.00</div>
          <div>150.00</div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="new-arrival">ON SALE</h1>
        </div>

        <hr></hr>
        <div className="main-div">
          <div>
          <Link to="/products/123">
            <img className="item-image" src="./img/13.jpg" alt="" /></Link>
          </div>
          <div className="item-name">Pack It On Your Back</div>
          <div className="a-price">150.00</div>
          <div>150.00</div>
        </div>
        <div className="main-div">
          <div>
            <img className="item-image" src="./img/03.jpg" alt="" />
          </div>
          <div className="item-name">Fancy Shades</div>
          <div className="a-price">420.00</div>
          <div>420.00</div>
        </div>
        <div className="main-div">
          <div>
            <img className="item-image" src="./img/27.jpg" alt="" />
          </div>
          <div className="item-name">Yellow Watch"</div>
          <div className="a-price">400.00</div>
          <div>330.00</div>
        </div>
      </div>
      <div> */}
                  {/* <div>
          <h1 className="new-arrival">BEST RATED</h1>
        </div>

        <hr></hr>
        <div className="main-div">
          <div>
            <img className="item-image" src="./img/27.jpg" alt="" />
          </div>
          <div className="item-name">Yellow Watch"</div>
          <div className="a-price">400.00</div>
          <div>330.00</div>
        </div>
        <div className="main-div">
          <div>
            <img className="item-image" src="./img/02.jpg" alt="" />
          </div>
          <div className="item-name">Retro Trainer</div>
          <div className="a-price">200.00</div>
          <div>175.00</div>
        </div>
        <div className="main-div">
          <div>
            <img className="item-image" src="./img/06.jpg" alt="" />
          </div>
          <div className="item-name">Seven Mile Sneakers</div>
          <div className="a-price">200.00</div>
          <div>100.00</div>
        </div> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
