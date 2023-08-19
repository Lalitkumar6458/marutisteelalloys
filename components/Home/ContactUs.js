import { useState,useEffect } from "react";
import { FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import { FaLocationDot,FaEarthAmericas,FaCircleUser } from "react-icons/fa6";
import { motion, useScroll } from "framer-motion";
import emailjs from '@emailjs/browser';
import { websiteData } from "@/public/constantData";
import contactImg from "../../public/Images/contactImg.png"
import Image from "next/image";
const ContactUs = () => {
  const[sendMeassege,setSendMessage]=useState(true)
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

     const [formValues, setFormValues] = useState({
       name: "",
       email: "",
       phoneNo: "",
       message: "",
     });

     const [errors, setErrors] = useState({});

     const handleChange = (event) => {
       const { name, value } = event.target;
       setFormValues((prevValues) => ({
         ...prevValues,
         [name]: value,
       }));
     };

     const validateForm = () => {
       const newErrors = {};
       if (!formValues.name.trim()) {
         newErrors.name = "Name is required";
       }
       if (!formValues.email.trim()) {
         newErrors.email = "Email is required";
       }
       if (!formValues.phoneNo.trim()) {
         newErrors.phoneNo = "Phone number is required";
       }
       if (!formValues.message.trim()) {
         newErrors.message = "Message is required";
       }

       setErrors(newErrors);
       return Object.keys(newErrors).length === 0; // Return true if there are no errors
     };

     const handleSubmit = (event) => {
     
       event.preventDefault();
       const isValid = validateForm();

       if (isValid) {
        setSendMessage(false)
         // Perform form submission logic here, e.g., sending data to the server
        //  emailjs.send('service_bmugh1b', 'template_ca0u8mn', formValues, 'VTgQXID7Y0jR4k33a')
        //  .then(response => {
     
        //    alert('Sent Message Successfully to rajesh alloys!', response)
         
        //    setSendMessage(true)
        //    setFormValues({
        //     name: "",
        //     email: "",
        //     phoneNo: "",
        //     message: "",
        //   })
        //  }, error => {
          
        //    alert('FAILED...',error)
        //  });
       }
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
    <Image className="w-full h-full absolute left-0 top-0 z-10" src={contactImg} width={1000} height={600} />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#ffffffc0] lx:grid-cols-2 px-[5%] mt-[50px]  h-auto py-4 place-items-center gap-5 overflow-hidden mb-[50px] z-50 relative">
        <motion.div className="">
          <motion.div
            initial={{ opacity: 1, x:0 }}
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
              inquiries, feel free to get in touch with us using the Contact Info.
              Our team will get back to you as soon as possible.
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
                       onClick={item.event?item.event:null} >
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
        <div className="">
          <motion.div
            className="border-[1px] border-solid border-mainRed p-[7%] bg-[#ffffff65] rounded-md "
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
          >
            <h2 className="text-mainRed font-Roboto font-semibold text-[1.7rem] md:text-[2rem]">
              You Have Question?
            </h2>
            <p className="text-[0.9rem] md:text-[1rem] text-slate-700 font-Roboto">
              Contact us using the form below,and we'll be happy to assist you.
            </p>

            <div className="mt-5">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="">
                  <input
                    type="text"
                    className="h-[40px] border-[1px] border-solid border-mainRed w-full focus:outline-0 rounded pl-3 bg-transparent text-mainRed"
                    placeholder="Your Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="text-mainRed">{errors.name}</span>
                  )}
                </div>
                <div className="">
                  <input
                    type="email"
                    className="h-[40px] border-[1px] border-solid border-mainRed w-full focus:outline-0 rounded pl-3 bg-transparent text-mainRed"
                    placeholder="Your Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}
                </div>
                <div className="">
                  <input
                    type="number"
                    className="h-[40px] border-[1px] border-solid border-mainRed w-full focus:outline-0 rounded pl-3 bg-transparent text-mainRed"
                    placeholder="Your Phone"
                    name="phoneNo"
                    value={formValues.phoneNo}
                    onChange={handleChange}
                  />
                  {errors.phoneNo && (
                    <span className="text-red-500">{errors.phoneNo}</span>
                  )}
                </div>
                <div className="">
                  <textarea
                    className="h-[100px] border-[1px] border-solid border-mainRed w-full focus:outline-0 rounded pl-3 bg-transparent text-mainRed"
                    placeholder="Your Message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <span className="text-red-500">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="h-[40px] w-full bg-mainRed text-white rounded"
                >
                 {sendMeassege?'SEND MESSAGE':'Sending...'} 
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs