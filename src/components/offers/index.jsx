import React from "react";
import './style.css'


const Offers=()=>{
    return(
<div className="images">
<div className="firstimg">
<img src={process.env.PUBLIC_URL + '/images/offer1.jpeg'} alt=""  className="first"/> 
</div>
<div  className="secondimg">
<img src={process.env.PUBLIC_URL + '/images/offer2.jpeg'} alt="" className="imgss" /> 
<img src={process.env.PUBLIC_URL + '/images/offer3.jpeg'} alt="" className="imgss" /> 

</div>
        </div>
    )
}
export default Offers