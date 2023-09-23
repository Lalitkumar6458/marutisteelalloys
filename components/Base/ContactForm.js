import React, { useState, useEffect } from "react";

import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ContactForm = ({heading}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    const squareVariants = {
      visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
      hidden: { opacity: 0, scale: 0.5, x: 100 },
    };
     const [sendMeassege, setSendMessage] = useState(true);
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
         setSendMessage(false);
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

  return (
    <div className="">
      <div className="">
        <motion.div
          className="border-[1px] border-solid border-mainRed p-[7%] bg-[#ffffff65] rounded-md "
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          {heading ? (
            <>
              <h2 className="text-mainRed font-Roboto font-semibold text-[1.7rem] md:text-[2rem]">
                You Have Question?
              </h2>
              <p className="text-[0.9rem] md:text-[1rem] text-slate-700 font-Roboto">
                Contact us using the form below,and we'll be happy to assist
                you.
              </p>
            </>
          ) : null}

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
                {sendMeassege ? "SEND MESSAGE" : "Sending..."}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm