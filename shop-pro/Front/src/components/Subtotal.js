import React, { useRef, useState } from 'react';
import "./Subtotal.css";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import {getBasketItemAmount} from "./reducer";
import {initialState} from "./reducer";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate=useNavigate();
  const nameRef=useRef({ value: "" });
  const emailRef=useRef({ value: "" });
  const [{basket},dispatch] = useStateValue();
  const [open,setOpen]=useState(false);

  const checkoutDone=async()=>{
    console.log('check');
    const name=nameRef.current.value;
    const email=emailRef.current.value;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log();
    if( name!="" && email.match(validRegex) && basket.length>0){
      console.log(`name : ${name}, email: ${email}`);
      basket.map((item)=>{
        dispatch({
          type:"REMOVE_FROM_BASKET",
          title:item.title,
        })
      })
      ////////////sent to db
      // try {
      //   const request = await sendRequest(
      //     "http://localhost:3000/users/login",
      //     "POST",
      //     JSON.stringify({
      //       email: data.get("email"),
      //       password: data.get("password"),
      //     }),
      //     { "Content-Type": "application/json" }
      //   );
  
      //   await fetch(`http://localhost:3000/bookmark/get/${request.user.id}`)
      //     .then((res) => (res.ok ? res.json() : { user: [] }))
      //     .then((data) => (request.user.bookmarks = data.user))
      //     .then(closeFormHandler)
      //     .then(() =>
      //       session.setSession({
      //         userId: request.user.id,
      //         name: request.user.name,
      //         email: request.user.email,
      //         bookmarks: request.user.bookmarks,
      //       })
      //     );
      // } catch (err) {
      //   return;
      // }
      /////////////
      setOpen(true);
      //sent to db
    }
    // name!="" && {basket}.length>0 &&
    
  }

  const closeModal=()=>{
    setOpen(false);
    navigate("/");
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height:200,
    bgcolor: 'background.paper',
    border: '3px solid #000',
    boxShadow: 24,
    p: 4,
    fontSize:'large',
    fontSize:'30px',
    fontFamily:'monospace',
  };

  return (
    <div className='subtotal'>
        <p>
            Subtotal ({getBasketItemAmount(basket)} items): <strong>$ {getBasketTotal(basket).toFixed(2)}</strong>
        </p>
        <div className="subtotal__details">
          <label className='subtotal__name'>Name</label>
          <input className='subtotal__name-input' type="text" ref={nameRef} placeholder="enter your name"/>
          <label className="subtotal__email">Email</label>
          <input className="subtotal__email-input" type="text" ref={emailRef} placeholder="enter your email"/>
        </div>
        
        <button  onClick={checkoutDone} className='checkout__button'>
            Checkout
        </button>
        <Modal
        open={open}
        onClose={()=>closeModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h3">
              <h3>The order is finish</h3>
              <h4>enjoy 😃</h4>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Subtotal