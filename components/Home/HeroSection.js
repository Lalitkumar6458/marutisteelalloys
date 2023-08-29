import React,{useState} from 'react'
import { Carousel } from 'antd';
import Image from 'next/image';
import Bottons from '../SmallComponents/Bottons';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

  const onChange = (currentSlide) => {
    setActiveSlide(currentSlide);
  };
  const slideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3, // Adjust the stagger duration
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
    const itemTransition = {
      heading: { delay: 0, duration: 0.8, ease: "easeOut" },
      text: { delay: 0.5, duration: 0.8, ease: "easeOut" },
      button: { delay: 1, duration: 0.8, ease: "easeOut" },
    };
    const slideData=[
        {
            id:1,
            text:<span>Prime Pipe Fittings Provider <br className='hidden md:block'/> in India</span>,
            desc:<span>Your Foremost Source for Comprehensive Pipe Fittings Inventory and  Supply Across India </span>,
            img:require("../../public/Images/HomeImg/pipefitting.jpg"),
            
        },
        
        {
            id:2,
            text:<span>Leading Flanges Supplier <br className='hidden md:block'/> in India</span>,
            desc:"Pioneering the market, we stand as the foremost supplier of flanges in India. Our commitment to quality and reliability sets us apart",
            img:require("../../public/Images/HomeImg/flangeImg.jpg"),
            
    
        },
        {
            id:3,
            text:<span>Foremost Pipe Suppliers <br className='hidden md:block'/> in India</span>,
            desc:"Your trusted source for high-quality pipes, delivering excellence in supply and service across India.",
            img:require("../../public/Images/HomeImg/pipeimg.jpg"),
            
    
        },
        
        {
            id:4,
            text:<sapn>Reliable Fasteners Supplier for <br className='hidden md:block'/> Your Every Need</sapn>,
            desc:"As a trusted fasteners supplier, we offer a comprehensive range of top-quality fastening solutions to meet your diverse requirements with precision and excellence.",
            img:require("../../public/Images/HomeImg/Fasteners.jpg"),
            
    
        },
        {
            id:5,
            text:<span>Your Trusted Source for Dairy &<br className='hidden md:block'/> Pharma Fittings</span>,
            desc:"We specialize in providing high-quality and hygienic dairy and pharma fittings, ensuring safety and precision for critical industries.",
            img:require("../../public/Images/ProductMain/stainlesssteel/bgimg.webp"),
            
    
        }
        // {
        //     id:6,
        //     text:<span>Unparalleled Stainless Steel Raw <br className='hidden md:block'/> Material Supplier</span>,
        //     desc:"Experience a comprehensive range of top-tier stainless steel raw materials, including tubes, pipes, rods, flats, and more. Elevate your projects with our premium-grade materials, known for their durability and versatility.",
        //     img:require("../../public/Images/HomeImg/buttweld-fittings.jpg"),
          
    
        // },
    
    ]
      const handleBeforeChange = (currentSlide) => {
        setActiveSlide(currentSlide);
      };
  return (
    <div className="h-[calc(100vh-110px)] w-full">
      <Carousel
        afterChange={onChange}
        beforeChange={handleBeforeChange}
        effect="scrollx"
        autoplay={true}
        autoplaySpeed={5000}
      >
        {slideData.map((item, index) => {
          return (
            <div className="h-[calc(100vh-110px)] w-full bg-dark-cl relative flex items-center justify-center px-[5%]">
              <div className=" w-full left-0 right-0 top-0 absolute h-full">
                <Image
                  className="h-full w-full object-cover"
                  src={item.img}
                  alt={item.text}
                  width={1000}
                  height={700}
                />
                <div className=" w-full h-full  left-0 right-0 top-0 absolute bg-[#0c134f13] z-50 "></div>
              </div>
              <AnimatePresence mode="wait">
                {index === activeSlide && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideVariants}
                    transition={{ duration: 1.5 }}
                    className="z-50 h-[calc(100vh-110px)] relative w-full flex items-start justify-center flex-col"
                  >
                    <motion.h1
                      transition={itemTransition.heading}
                      variants={itemVariants}
                      className="text-[2rem] md:text-[3rem] lg:text-[3.6rem] text-white font-Oswald font-medium"
                      style={{ textShadow: "3px 3px 6px black" }}
                    >
                      {item.text}
                    </motion.h1>
                    <motion.p
                      transition={itemTransition.text}
                      variants={itemVariants}
                      className="w-[95%] md:w-[80%]  lg:w-[50%] text-left text-white text-[1rem] md:text-[1.2rem] border-l-2 border-dark-cl pl-5 font-Roboto font-medium"
                      style={{ textShadow: "3px 3px 6px black" }}
                    >
                      {item.desc}
                    </motion.p>
                    <motion.div
                      transition={itemTransition.button}
                      variants={itemVariants}
                      className="mt-5 flex gap-3"
                    >
                      <Link href="/product">
                        <button className="bg-dark-cl text-white h-[50px] px-4 rounded font-poppins font-medium">
                          Know More
                        </button>
                      </Link>
                      <Link href="/contact">
                        <button className="text-dark-cl bg-white h-[50px] px-4 border border-dark-cl  rounded font-poppins font-medium">
                          Inquiry Now
                        </button>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HeroSection