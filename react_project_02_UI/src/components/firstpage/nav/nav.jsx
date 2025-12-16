import React from 'react'   
import Logo from "../../../assets/logo.png";
import { TbPhoneRinging } from "react-icons/tb";
import { IoMdCloudDone } from "react-icons/io";

const nav = () => {
  return (
    <div >
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Offers</li>
            <li>review</li>
            <li>Contacts</li>
            <li> <span><TbPhoneRinging /></span>+91-9200204810</li>
            

        </ul>
      </div>
      <div>
        <span><IoMdCloudDone /></span>Recived
      </div>
    </div>
  )
}

export default nav
