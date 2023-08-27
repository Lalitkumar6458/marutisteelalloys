import { websiteData } from '@/public/constantData';
import Image from 'next/image'
import React from 'react'

const Whatsappbtn = () => {
      const handleWhatsAppClick = () => {
        let phoneNumber = "+91" + websiteData.contactInfo.mobileNo[0];
        const formattedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
        const url = `https://wa.me/${formattedPhoneNumber}`;
        window.open(url, "_blank");
      };
  return (
    <div
      className="fixed bottom-4 left-4 cursor-pointer p-1 bg-white shadow-iconShadow rounded-full z-50"
      onClick={handleWhatsAppClick}
    >
      <Image
        className="w-[50px] h-[50px]"
        src={require("../../public/Images/Icons/whatsapp.png")}
        alt=""
        width={60}
        height={70}
      />
    </div>
  );
}

export default Whatsappbtn