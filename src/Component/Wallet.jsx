import { IoGrid } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

import { Link } from "react-router-dom";

import * as React from 'react';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";






function Wallet() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }


  return (
    <>

      <div className="container">
        <div className="headericons ">
          <div className="bg-white p-2 icons">
            <IoGrid className="h5 iconcolor" id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick} />

            <AnimatePresence>
              {open && (
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ 'aria-labelledby': 'basic-button', }}

                  PaperProps={{
                    component: motion.div,
                    initial: { x: "0%", opacity: 0 },
                    animate: { x: 0, opacity: 1 },
                    exit: { x: "-100%", opacity: 0 },
                    transition: { duration: 0.2, ease: "easeInOut" },
                    sx: {
                      width: '240px',
                      height: '94vh',
                      marginLeft: "78px",
                      marginTop: "-6px",
                      padding: "80px",
                      textAlign: "center",
                      backgroundColor: "rgb(255 255 255) ",
                      color: "darkblue",
                      borderRadius: "22px",
                      maxHeight:"100vh",
                      "@media (max-width: 576px)": {
                        width: "280px", 
                        height: "100vh",
                        position: "fixed",
                        left: 0,
                        marginTop: "15px",
                        borderRadius: "7",
                        marginLeft:"-30px",
                        maxHeight:"100vh",
                      },
                        "@media (min-width: 600px) and (max-width:1400px)": {
                          width: '240px',
                          height: '95vh',
                          marginLeft: "78px",
                          marginTop: "2px",
                          padding: "80px",
                          textAlign: "center",
                          backgroundColor: "rgb(255 255 255) ",
                          color: "darkblue",
                          borderRadius: "22px",
                          maxHeight:"100vh",
                        },

                         "@media (min-width: 1550px) and (max-width:1800px)": {
                          width: '240px',
                          height: '85vh',
                          marginLeft: "95px",
                          marginTop: "-48px",
                          padding: "80px",
                          textAlign: "center",
                          backgroundColor: "rgb(255 255 255) ",
                          color: "darkblue",
                          borderRadius: "22px",
                          maxHeight:"100vh",
                        },
                        "@media (min-width: 1801px) and (max-width:2600px)": {
                          width: '240px',
                          height: '96vh',
                          marginLeft: "79px",
                          marginTop: "2px",
                          padding: "80px",
                          textAlign: "center",
                          backgroundColor: "rgb(255 255 255) ",
                          color: "darkblue",
                          borderRadius: "22px",
                          maxHeight:"100vh",
                        },
                      
                   
                          
                    }
                  }}
                  transformOrigin={{
                    vertical: "left",
                    horizontal: "center",
                  }}>

                  <div> <MdKeyboardArrowRight onClick={handleClose} className="rightarrow" /></div>

                  <Link to="/dash" className="text-decoration-none">
                    <MenuItem sx={{ justifyContent: "center",marginTop:"100px",color:"rgb(75 85 99 )" }}>Dashboard</MenuItem>  </Link>          {/*onClick={handleClose}*/}

                  <Link to="/wallet" className="text-decoration-none">
                    <MenuItem sx={{ justifyContent: "center", fontWeight: 'bold',color:"black" }}>Wallets</MenuItem> </Link>

                  <Link to="/fcslots" className="text-decoration-none">
                    <MenuItem sx={{ justifyContent: "center",color:"rgb(75 85 99 )" }}>FC Slots</MenuItem> </Link>

                  <Link to="/referrals" className="text-decoration-none">
                    <MenuItem sx={{ justifyContent: "center",color:"rgb(75 85 99 )" }}>Referrals</MenuItem></Link>

                  <Link to="/chats" className="text-decoration-none">
                    <MenuItem sx={{ justifyContent: "center",color:"rgb(75 85 99 )" }}>Chats</MenuItem></Link>

                  <Link to="/setting" className="text-decoration-none">
                    <MenuItem sx={{ justifyContent: "center",color:"rgb(75 85 99 )" }}>Settings</MenuItem> </Link>
                </Menu>
              )}
            </AnimatePresence>
          </div>

          <div className="bg-white p-2 icons ms-4">
            <Link to="/dash">   <IoIosArrowBack className="h5 iconcolor "></IoIosArrowBack> </Link>
          </div>

          <div className="mt-1 ms-2 chats ps-3">
            <h5> Wallet</h5>
          </div>

          <div className="bg-white p-2 ms-3 icons ">
            <Link to="/chats">    <BiSolidMessageRoundedDetail className="h5 iconcolor "></BiSolidMessageRoundedDetail> </Link>
          </div>
        </div>


        <div className="wallet mt-3">

          <div className="d-flex mt-3 wlt">
            <h6 className="ms-3 text-white trans">Transaction Date</h6>
            <h6 className=" text-white wallets">My Wallet</h6>
          </div>

          <div className="d-flex justify-content-around walvalue mt-1">
            <p>All Day</p>
            <p className="ms-5">$NaN</p>
          </div>

          <div className="d-flex justify-content-around text-white walletoption">
            <h6 className="ms-2">All</h6>
            <h6 className="ms-4">Crypto</h6>
            <h6 className="ms-2">Internal</h6>
          </div>

        </div>

        <div className="mt-4 wallet-button ">
          <Link to="/topup"><button className="text-white border border-none ">Top Up</button></Link>
          <button className="ms-2 text-white border border-none">Transfer</button>
          <Link to="/withdraw"><button className="ms-2 text-white border border-none ">Withdraw</button></Link>
        </div>

      </div>

    </>
  )
}
export default Wallet;