import { IoGrid } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";

import * as React from 'react';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Drawer } from "@mui/material";

import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";




function Dash() {

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
          <div className="bg-white p-2 icons ">
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
                                    marginLeft: "95px",
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
                                      top: 10,
                                      marginTop: "15px",
                                      borderRadius: "22",
                                      marginLeft:"-25px",
                                      maxHeight:"100vh",
                                     
                                    },
                                    "@media (min-width: 600px) and (max-width:1400px)": {
                                      width: '240px',
                                      height: '95vh',
                                      marginLeft: "95px",
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
                                      marginLeft: "95px",
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

                  <Link to="/dash" className="text-decoration-none ">
                    <MenuItem sx={{ justifyContent: "center", fontWeight: 'bold',marginTop:"100px",color:"black" }}>Dashboard</MenuItem>  </Link>          {/*onClick={handleClose}*/}

                  <Link to="/wallet" className="text-decoration-none">
                    <MenuItem sx={{ justifyContent: "center",color:"rgb(75 85 99 )" }}>Wallets</MenuItem> </Link>

                  <Link to="/fcslots" className="text-decoration-none">
                    <MenuItem sx={{ justifyContent: "center" ,color:"rgb(75 85 99 )"}}>FC Slots</MenuItem> </Link>

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

          <div className="bg-white p-2 icons ms-3">
            <Link to="/chats">   <IoIosArrowBack className="h5 iconcolor">  </IoIosArrowBack> </Link>
          </div>

          <div className="mt-1 ms-3 dash text-secondary">
            <h5>Dashboard</h5>
          </div>

          <div className="bg-white p-2 ms-4 icons ">
            <Link to="/chats">   <BiSolidMessageRoundedDetail className="h5 iconcolor "></BiSolidMessageRoundedDetail> </Link>
          </div>
        </div>

        <div className="store">
          <div className=" d-flex justify-content-between mt-5  bg-white  mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2  mwt">My Wallet</p>
            <h5 className="ms-5 value me-3">$400</h5>
          </div>

          <div className=" d-flex justify-content-between  mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className="info ms-2 " />
            <p className=" mt-2 ms-1">Reverse - My Wallet</p>
            <button className="ms-4 mt-1 me-1 border border-none  h-75 rmw">$0</button>
          </div>

          <div className=" d-flex justify-content-between  mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2 me-4">Crowd Stacking</p>
            <h5 className="ms-5 value me-3">$0</h5>
          </div>

          <div className=" d-flex justify-content-between   mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2 me-4">Active Slots</p>
            <h5 className="ms-5 mt-2 me-5"></h5>
          </div>

          <div className=" d-flex justify-content-between   mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2 me-4">Completed Slots</p>
            <h5 className="ms-5 value me-3">0</h5>
          </div>

          <div className=" d-flex justify-content-between  mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2 me-3">Yield - Today</p>
            <h5 className="ms-5 value me-3">$0.00</h5>
          </div>

          <div className=" d-flex justify-content-between   mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2 me-3">Yield - Overall</p>
            <h5 className="ms-5 value me-3">$0.0</h5>
          </div>

          <div className=" d-flex justify-content-between  mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2 ">Refferal Income - Today</p>
            <h5 className="ms-3 value me-3">$0</h5>
          </div>

          <div className=" d-flex justify-content-between  mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2 ms-2">Refferal Income - Overall</p>
            <h5 className="ms-3 value me-3">$0</h5>
          </div>

          <div className=" d-flex justify-content-between  mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2 ms-2">Total Crypto Top - Up</p>
            <h5 className="ms-4 value me-3">$500</h5>
          </div>

          <div className=" d-flex justify-content-between   mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2">Total Crypto Withdraw</p>
            <h5 className="ms-4 value me-3">$0</h5>
          </div>

          <div className=" d-flex justify-content-between   mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2 ms-2">Total Internal Transfer IN</p>
            <h5 className="ms-4 value me-3">$0</h5>
          </div>

          <div className=" d-flex justify-content-between   mt-2 bg-white   mw ">
            <IoIosInformationCircleOutline className=" ms-2 info" />
            <p className=" mt-2 ms-2">Total Internal Transfer OUT</p>
            <h5 className="  value me-3">$500</h5>
          </div>
        </div>

        <div className="mt-4 bottom-button ">
          <button  className="text-white border border-none ms-2">
            <Link to="/topup" className="text-decoration-none text-white">Top Up </Link>
          </button>

          <button  className="ms-3 text-white border border-none">Transfer</button>

          <button  className="ms-3  border border-none">
            <Link to="/withdraw" className="text-decoration-none text-white">Withdraw</Link>
          </button>
        </div>
      </div>
    </>
  )
}
export default Dash;