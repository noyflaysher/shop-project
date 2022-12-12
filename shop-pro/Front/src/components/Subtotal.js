import React, { useRef, useState } from 'react';
import "./Subtotal.css";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
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

  const checkoutDone=()=>{
    console.log('check');
    const name=nameRef.current.value;
    const email=emailRef.current.value;
    if(name!="" && {basket}.length>0){
      console.log(`name : ${name}, email: ${email}`);
      setOpen(true);
      //sent to db
    }
    
  }

  const closeModal=()=>{
    setOpen(false);
    navigate("/");
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -150%)',
    width: 400,
    height:160,
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
            Subtotal ({basket.length} items): <strong>$ {getBasketTotal(basket).toFixed(2)}</strong>
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
                
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Subtotal