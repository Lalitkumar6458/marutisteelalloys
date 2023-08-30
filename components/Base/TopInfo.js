import React from 'react'
import {FaPhone,FaEnvelope,FaWhatsapp, FaFacebook, FaInstagram} from "react-icons/fa"
import { websiteData } from '@/public/constantData';
const TopInfo = () => {
  const handleEmailClick = () => {
    let email=websiteData.contactInfo.email[0]
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
    window.open(url);
  };
  const handlePhoneClick = () => {
  let  phoneNumber="+91"+websiteData.contactInfo.mobileNo[0]
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `tel:${formattedPhoneNumber}`;
    window.location.href = url;
  };
  const handleWhatsAppClick = () => {
    let  phoneNumber="+91"+websiteData.contactInfo.mobileNo[0]
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `https://wa.me/${formattedPhoneNumber}`;
    window.open(url, '_blank');
  };
  const handleInsta=(url)=>{
    window.open(url, '_blank');
  }

  return (
    <div className="h-[50px] max-[767px]:h-[50px] w-full bg-footerBg text-white flex items-center justify-between px-[5%] text-[1.3rem]">
      <div className="flex md:items-center justify-between md:w-[60%] max-[767px]:flex-col">
        <span
          className="flex items-center gap-3 font-poppins min-[320px]:text-[0.9rem] xl:text-[1.2rem]  lg:text-[1rem] cursor-pointer "
          onClick={handlePhoneClick}
        >
          <FaPhone className="text-mainRed" /> +91:
          {websiteData.contactInfo.mobileNo[0]}
        </span>
        <span
          className="flex items-center gap-3 font-poppins min-[320px]:text-[0.9rem] xl:text-[1.2rem]  lg:text-[1rem] cursor-pointer "
          onClick={handleEmailClick}
        >
          <FaEnvelope className="text-mainRed" />{" "}
          {websiteData.contactInfo.email[0]}{" "}
        </span>
      </div>
      <div className="flex items-center gap-2 max-[767px]:text-[1.2rem] lg:text-[1.2rem]  xl:text-[1.2rem]">
        <span
          className="p-2 rounded-full text-mainRed bg-white hover:bg-mainRed hover:text-white cursor-pointer"
          onClick={() => handleWhatsAppClick()}
        >
          <FaWhatsapp />
        </span>
        <span
          className="p-2 rounded-full text-mainRed bg-white hover:bg-mainRed hover:text-white cursor-pointer"
          onClick={() =>
            handleInsta(
              "https://www.facebook.com/profile.php?id=100064562211511&mibextid=ZbWKwL"
            )
          }
        >
          <FaFacebook />
        </span>
        <span
          className="p-2 rounded-full text-mainRed bg-white hover:bg-mainRed hover:text-white cursor-pointer"
          onClick={() =>
            handleInsta(
              "https://www.facebook.com/profile.php?id=100064562211511&mibextid=ZbWKwL"
            )
          }
        >
          <FaInstagram />
        </span>
      </div>
    </div>
  );
}

export default TopInfo