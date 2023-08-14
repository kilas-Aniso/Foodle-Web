import React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPinterest,
  faInstagram,
  faTwitter,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';


const Footer = () =>{
    return(
      

            <div className="footer">

        <div class="footer-div-1">
         
          <h3 className="fooodish">Fooodish</h3>
          <p>Continue Fooodish 2023 all rights reserved</p>
        </div>

        <div className="footer-div-3">
            <h3>Menu</h3>
            <p>Offers</p>
            <p>Service</p>
            <p>About Us</p>
        </div>
        

        <div className="footer-div-3">
            <h3>Legal</h3>
            <p>General info</p>
            <p>Smart Gadget</p>
            <p>Bill Payment Verification</p>
            
        </div>
    
           
        <div className="footer-div-3">
            <h3>Information</h3>
            <p>Menu</p>
            <p>Quality</p>
            <p>Make a choice</p>
            <p>Salad With Vegetable</p>
            <p>Fast Delivery</p>
            <p>Subsribe</p>
            <div className="icons">
                

            </div>
        </div>

        <div className="footer-div-3">
            <h3>Contact</h3>
            <p>+123 456 789</p>
            <p>Explore</p>
            <p>info@foodish.com</p>
            <p>1245, New York, USA</p>
        </div>
        <div class="footer-div-3">
  <h3>Social Media</h3>
  <div className="icons">
    <FontAwesomeIcon icon={faPinterest} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faFacebook} />
  </div>
</div>

        </div>



    

    );
}

export default Footer;


