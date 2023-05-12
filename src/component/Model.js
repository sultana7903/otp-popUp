import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Model() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [first, setFirst] = React.useState([]);
  const [second, setSecond] = React.useState([]);
  const [third, setThird] = React.useState([]);
  const [fourth, setFourth] = React.useState([]);
  const [fifth, setFifth] = React.useState([]);
  const [sixth, setSixth] = React.useState([]);

  useEffect(() => {
    if (first.length === 1 && second.length === 0) {
      document.getElementById("first").blur();
      document.getElementById("second").focus();
    } else if (first.length === 1 && second.length === 1 && third.length === 0) {
      document.getElementById("second").blur();
      document.getElementById("third").focus();
    } else if (first.length === 1 && second.length === 1 && third.length === 1 && fourth.length === 0) {
      document.getElementById("third").blur();
      document.getElementById("fourth").focus();
    } else if (
      first.length === 1 &&
      second.length === 1 &&
      third.length === 1 &&
      fourth.length === 1 && fifth.length === 0
    ) {
      document.getElementById("fourth").blur();
      document.getElementById("fifth").focus();
    } else if (
      first.length === 1 &&
      second.length === 1 &&
      third.length === 1 &&
      fourth.length === 1 &&
      fifth.length === 1 && sixth.length === 0
    ) {
      document.getElementById("fifth").blur();
      document.getElementById("sixth").focus();
    }

    else if(sixth.length === 1 && first.length === 1 && second.length === 1 && third.length === 1 && fourth.length === 1 && fifth.length === 1){
      document.getElementById("sixth").blur()
   
    }
    
  }, [first, second, third, fourth, fifth, sixth]);

  return (
    <div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"20%"}}>
      <Button
      onClick={handleOpen}>Open modal</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div  style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
        <Box sx={{...style, width:500}}
       
        >
          <h1>Phone Verification</h1>
          <hr />
          <h3 style={{opacity:0.5}}>Enter the OTP you received on 89985-9XXXX</h3>
          <div>
          <input
            onChange={(e) => setFirst([e.target.value])}
            style={{ maxWidth: "10%", margin:"0 10px" }}
            name=""
            id="first"
          />
          <input
            onChange={(e) => setSecond([e.target.value])}
            style={{ maxWidth: "10%", margin:"0 10px" }}
            name=""
            id="second"
          />
          <input
            onChange={(e) => setThird([e.target.value])}
            style={{ maxWidth: "10%", margin:"0 10px" }}
            name=""
            id="third"
          />
          <input
            onChange={(e) => setFourth([e.target.value])}
            style={{ maxWidth: "10%", margin:"0 10px" }}
            name=""
            id="fourth"
          />
          <input
            onChange={(e) => setFifth([e.target.value])}
            style={{ maxWidth: "10%", margin:"0 10px" }}
            name=""
            id="fifth"
          />
          <input
            onChange={(e) => setSixth([e.target.value])}
            style={{ maxWidth: "10%", margin:"0 10px" }}
            name=""
            id="sixth"
          />
          </div>
          <div >
      
        <div style={{display:"flex", justifyContent:"space-between", margin:"0 24px", fontWeight:"100", color:"blue"}}>
         <h3 style={{display:"flex", justifyContent:"space-between", opacity:0.5}}>Change Number</h3>
          <h3 style={{display:"flex", justifyContent:"space-between", opacity:0.5}}>Re-send OTP</h3>
       
        </div>
        <button 
        style={{margin:"12px", padding:"15px", borderRadius:"50px", backgroundColor:"green",opacity:0.6, color:"white", width:"275px", fontSize:"18px"}}
        >
          Verify Phone Number</button>
        </div>
        </Box>
        </div>
      </Modal>
    </div>
  );
}
