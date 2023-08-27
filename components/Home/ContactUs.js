import { useState,useEffect } from "react";
import { FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import { FaLocationDot,FaEarthAmericas,FaCircleUser } from "react-icons/fa6";
import { motion, useScroll } from "framer-motion";
import emailjs from '@emailjs/browser';
import { websiteData } from "@/public/constantData";
import contactImg from "../../public/Images/contactImg.png"
import Image from "next/image";
import ContactForm from "../Base/ContactForm";
const ContactUs = () => {

  const handleEmailClick = () => {

    let email=websiteData.contactInfo.email
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
    window.open(url);
  };
  const handlePhoneClick = (phone) => {
  let  phoneNumber="+91"+websiteData.contactInfo.mobileNo[0]
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `tel:${formattedPhoneNumber}`;
    window.location.href = url;
  };

   

 



 

     const contactData = [
       {
         id: 1,
         heading: "Phone Number",
         value: ["+91 "+websiteData.contactInfo.mobileNo[0],"+91 "+websiteData.contactInfo.mobileNo[1]],
         icon: <FaPhoneAlt />,
         event:handlePhoneClick
       },
       {
         id: 2,
         heading: "EMAIL",
         value: [...websiteData.contactInfo.email],
         icon: <FaEnvelope/>,
         event:handleEmailClick
       },
       {
         id: 3,
         heading: "Contact Person",
         value: ["BHARAT MODI"],
         icon: <FaCircleUser />,

       },
       {
         id: 4,
         heading: "Address",
         value: [
          ...websiteData.contactInfo.address
         ],
         icon: <FaLocationDot />,
       },
     ];

    
  return (
    <div className=" relative mt-[40px] mb-[40px]">
      <Image
        className="w-full h-full absolute left-0 top-0 z-10"
        src={contactImg}
        width={1000}
        height={600}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#ffffffc0] lx:grid-cols-2 px-[5%] mt-[50px]  h-auto py-4 place-items-center gap-5 overflow-hidden mb-[50px] z-50 relative">
        <motion.div className="">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
            className=""
          >
            <motion.h5 className="text-[1rem] text-mainRed">
              CONTACT US
            </motion.h5>
            <h3 className="text-[2rem] md:text-[3rem] font-Oswald font-semibold lg:text-[3.5rem] text-dark-cl">
              Get In Touch
            </h3>
            <p className="text-[0.8rem] md:text-[1rem] text-gray-700 font-Roboto font-medium">
              We've got answers! If you have any questions, feedback, or
              inquiries, feel free to get in touch with us using the Contact
              Info. Our team will get back to you as soon as possible.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-7 gap-y-4 text-black ">
            {contactData.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  className=" w-full  flex gap-2 flex-col items-center justify-center border-[1px] border-solid border-mainRed p-[20px] rounded "
                  initial={{ opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                  }}
                >
                  <div className="text-mainRed ">{item.icon}</div>
                  <div className="flex flex-col items-center justify-center">
                    <h4 className="text-[1.2rem] font-medium font-Roboto">
                      {item.heading}
                    </h4>
                    {item.value.map((each) => {
                      return (
                        <p
                          className="text-[0.9rem] font-Oswald text-dark-cl ml-2 text-center mt-2 font-semibold"
                          key={each}
                          onClick={item.event ? item.event : null}
                        >
                          {each}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <ContactForm heading={true} />
      </div>
    </div>
  );
}

export default ContactUs