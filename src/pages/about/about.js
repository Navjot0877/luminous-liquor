import Navbar from '../../components/navbar/navbar';
import './about.css';
import {useState, useEffect} from "react";
import Axios from 'axios'
import image from "../../components/images/wine.png";
import Heart from "../../components/images/heart.png";
import HeartFilled from "../../components/images/heartFilled.png";
import GooglePayButton from "@google-pay/button-react";
import React from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {useLocation} from 'react-router-dom';




const About  = () => {

//Variables
    const total = 0;
    const a = 0;
  
    const location = useLocation();

//Fetching the Parametrs
    let param = useParams();
    console.log(param);


// Declaring UseStates
    const [productInfoList, setproductInfo] = useState([]);
    const [postalList, setpostalList] = useState([]);
    const [mypost, setpostal] = useState('');
    const [feedback, setfeedback] = useState('');
    const [cartList, setCartList] = useState([]);
    const [addedFav, setAddFav] = useState([]);
    const [counter, setCounter] = useState(parseInt(param.quantity));
    const [price, setPrice] = useState(19.9);
    const [high, setHigh] = useState(0);


    
//Fetching all the details of Checked Out Product
  useEffect(()=> {
    Axios.get("https://luminious-liquor.herokuapp.com/productInfo/" + param.id).then((response)=>{
    setproductInfo(response.data);
   
    })

    
    
}, [setproductInfo])


// function prices(){
// productInfoList.map((val, key) =>
// // Only do this if items have no stable ID

// setPrice(val.price)

// );
  


// }



const handleChange = event => {
  setpostal(event.target.value);

};



function check(){
  
    Axios.get("https://luminious-liquor.herokuapp.com/readpostal/" + mypost).then((response)=>{
    setpostalList(response.data);
    
  
  
  
    })
 
  
  if(postalList.length == 0){
    setfeedback("Sorry, we don't deliver to this location")
  }
  else{
    postalList.map((val, key) =>
  // Only do this if items have no stable ID
  
  setfeedback("We will deliver in " + val.time + " hours")

);
    
  }

}



var payPrice = "25.98";





    

 
    
   
    
    const [subTotal, setSubTotal] = useState((price*parseInt(param.quantity).toFixed(2)) );
    const [shipping, setShipping] = useState(5);
    const [tax, setTax] = useState(parseFloat((0.05*subTotal).toFixed(2)));
    const [grandTotal, setGrandTotal] = useState(((subTotal + shipping + tax)).toFixed(2));
    
    
    const [googlePay, setGooglePay] = useState("25.98");

    const handleCounterAdd = () => {
      
      productInfoList.map((val, key) =>
      setHigh(val.quantities)
    
    );
  
   if(counter<high){
      setCounter(counter+1)
      setSubTotal(parseFloat(((counter+1)* price).toFixed(1)))
      setTax(parseFloat((0.05 * ((counter+1)* price)).toFixed(1)))
      setGrandTotal(((counter+1)* price + shipping + (0.05 * (counter+1)* price)).toFixed(2))
      
      payPrice = ((((counter+1)* price + shipping + (0.05 * (counter+1)* price))).toFixed(2))
      
      setGooglePay(payPrice)
   }

    }

    const handleSub = () => {

      if((counter-1)>0){
      setCounter(counter-1)
      setSubTotal(parseFloat(((counter-1)* price).toFixed(1)))
      setTax(parseFloat((0.05 * ((counter-1)* price)).toFixed(1)));
      setGrandTotal(((counter-1)* price + shipping + (0.05 * (counter-1)* price)).toFixed(2))

      payPrice = ((((counter-1)* price + shipping + (0.05 * (counter-1)* price))).toFixed(2))
   
      setGooglePay(payPrice)
      }
    }
  

    // useEffect(()=> {
    //     Axios.get("http://localhost:4010/readCart").then((response)=>{
    //     setCartList(response.data);
    //     })
        
    // }, [cartList.length])

  
    const [targetValue, setTargetValue] = useState(1);
    async function processPayment(){
     alert("done")
   }


    return (
    <div>
  
<Navbar />

<div class="jumbotron bg-cover text-white">
    <div class="container py-5 text-center">
        <h2 class="display-4 font-weight-bold">About Us</h2>
        {/* <p class="font-italic mb-0">Using simple jumbotron-style component, create a nice Bootstrap 4 header with a background image.</p>
        <p class="font-italic">Snippe by
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p> */}
        {/* <a href="#" role="button" class="btn btn-primary px-5">See All Features</a> */}
    </div>
</div>





<div className='container'>



<div className="left_pay">

asdd
</div>

</div>



</div>
    )
}

export default About;