
import React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirFreshener, faCoffee, faCreditCard, faCutlery } from '@fortawesome/free-solid-svg-icons';
import Card from "../Card";
import Offers from "../offers";


const Home = () => {

  const cards = [
    {
      title: "Chicken Burger",
      rating: 5,
      price: "3.5",
      imageUrl: process.env.PUBLIC_URL + '/images/chickenBurger.jpeg',
    },
    {
      title: "Deluxe Pizza",
      rating: 4,
      price: "5.5",
      imageUrl: process.env.PUBLIC_URL + '/images/chicken pizza.jpeg',
    },
    {
      title: "Crispy Fries",
      rating: 3,
      price: "2.0",
      imageUrl: process.env.PUBLIC_URL + '/images/chicken fry.jpeg',
    },
    {
      title: "Grill Sandwich",
      rating: 5,
      price: "3.5",
      imageUrl: process.env.PUBLIC_URL + '/images/Grill sandwitch.jpeg',
    },
    {
      title: "Taco",
      rating: 4,
      price: "5.5",
      imageUrl: process.env.PUBLIC_URL + '/images/Tacco.jpeg',
    },
    {
      title: "Crispy Fries",
      rating: 3,
      price: "2.0",
      imageUrl: process.env.PUBLIC_URL + '/images/chicken fry.jpeg',
    },
  ];

  return (
   
    <div >
   
       
      <div className="home">
  <div className="text">
    <h1>All Fast Food is <br />Available at Foodle</h1>
    <p>We Are Just A Click Away When You <br />Crave For Delicious Fast Food</p>
    <button className="btn1">Buy Now</button>
    <button className="btn1">How To Order</button>
  </div>
  <div className="sandwich">
    <img src={process.env.PUBLIC_URL + '/images/sandwich.png'} alt="sandwich" /> 
  </div>
</div>
<div className="grid-container">
  <div className="grid-item">
    <FontAwesomeIcon icon={faCutlery} />
    <h1>Fast Delivery</h1>
    <p>The Food Will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering</p>
  </div>
  <div className="grid-item">
    <FontAwesomeIcon icon={faCutlery} />
    <h1>Fresh Food</h1>
    <p>Your Food Will Be Delivered <br />100% Fresh To Your Home. We<br />Do Not Deliver Stale Food</p>
  </div>
  <div className="grid-item">
    <FontAwesomeIcon icon={faCutlery} />
    <h1>Free Delivery</h1>
    <p>Your Food Delivery Is<br /> Absolutely Free. No Cost<br /> Just Order And Enjoy</p>
  </div>
</div>


{/* <================================================> */}
<div>
<div className="categories-text">
<div className="right-content">
    <h1>Best<span>Deliverd </span><br/> Categories </h1>
  </div>
  <div className="left-content">
    <p>Here Are Some Of Our Best Distributed<br/> Categories. If You Want You Can Order<br/> From Here</p>
  </div>

</div>
<div className="image-container">
  <div>
  <img src={process.env.PUBLIC_URL + '/images/burger.jpeg'} alt="sandwich" /> 
  <h1>Chicken Burger</h1>
  <span>order now </span>
  </div>
  <div>
  <img src={process.env.PUBLIC_URL + '/images/Pizza .jpeg'} alt="sandwich" /> 
  <h1>Chicken Burger</h1>
  <span>order now </span>
  </div>
  <div>
  <img src={process.env.PUBLIC_URL + '/images/chips.jpeg'} alt="sandwich" /> 
  <h1>Chicken Burger</h1>
  <span>order now </span>
  </div>
</div>

{/* <================================> */}

<div className="menu-section">
      <h1>
        Our <span className="highlight-text">Regular</span> Menu
      </h1>
      <div className="content">
        <p>These Are Our Regular Menus. You Can Order Anything You Like</p>
        <button className="see-all-button">See All</button>
      </div>
    </div>


{/* <================================> */}

<div className="row">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            rating={card.rating}
            price={card.price}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <Offers/>
</div>

    

    </div>
  );
}

export default Home;
