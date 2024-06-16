import React, { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../SmallComponents/SectionHeading";

import Image from "next/image";

const IndustriesServe = () => {
    const [ref, inView] = useInView();
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();
    const [ref5, inView5] = useInView();
  const Data = [
    {
      id: 1,
      heading: "Automobile Industries",
      ref: ref,
      img: require("../../public/Images/industries/img7.jpg"),
    },
    {
      id: 2,
      heading: "Petrochemical Industries",
      ref: ref1,
      img: require("../../public/Images/industries/img4.jpeg"),
    },
    {
      id: 3,
      heading: "Chemical Industries",
      ref: ref2,
      img: require("../../public/Images/industries/img6.jpg"),
    },
    {
      id: 4,
      heading: "Oil & Gas Industries",
      ref: ref3,
      img: require("../../public/Images/industries/img3.jpg"),
    },
    {
      id: 5,
      heading: "Construction and Architecture",
      ref: ref4,
      img: require("../../public/Images/industries/img1.jpg"),
    },
    {
      id: 6,
      heading: "Fertilizer Industries",
      ref: ref5,
      img: require("../../public/Images/industries/img2.jpg"),
    },
  ];
  const controls = useAnimation();


useEffect(() => {
  if (inView || inView1 || inView2 || inView3 || inView4 || inView5) {
    controls.start("visible");
  }
}, [controls, inView, inView1, inView2, inView3, inView4, inView5]);

  const squareVariants = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.5, x: 100 },
  };
  
  return (
    <div className="mt-[50px] mb-[40px] px-[5%]">
      <SectionHeading text={"Applications"} heading={"Industries We Serve"} />

      <div
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-[40px]"
      >
        {Data.map((item,index) => {
          return (
            <motion.div
            key={index}
              ref={item.ref}
              animate={controls}
          initial="hidden"
              variants={squareVariants}
              className="h-[300px] w-full shadow-boxshadow rounded-md"
            >
              <div className="w-full h-[80%] p-1 border rounded-md overflow-hidden">
                <Image
                  className="w-full h-full rounded-md hover:scale-110 transition-all duration-700 ease-in-out"
                  src={item.img}
                  alt={item.heading}
                  width={500}
                  height={400}
                />
              </div>
              <div className="h-[20%] flex items-center justify-center">
                <h4 className="text-[1.4rem] font-Oswald font-medium text-dark-cl">
                  {item.heading}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustriesServe;
