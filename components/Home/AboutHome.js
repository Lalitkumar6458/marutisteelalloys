import { websiteData } from '@/public/constantData'
import Image from 'next/image'
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer"
import aboutImg from "../../public/Images/About/homeAbout.jpg"
import Link from 'next/link'
const AboutHome = () => {
const controls = useAnimation();
const [ref, inView] = useInView();
const [ref1, inView1] = useInView();

useEffect(() => {
  if (inView || inView1) {
    controls.start("visible");
  }
}, [controls, inView, inView1]);
  // useEffect(() => {
  //   controls.start({ opacity: 1, y: 0 });
  // }, [controls]);
const squareVariants = {
  visible: { opacity: 1, scale:1, x:0,transition: { duration: 1 } },
  hidden: { opacity: 0, scale:0.5, x: 100 }
};
const headingAni = {
  visible: { opacity: 1, y:0, transition: { duration: 1 } },
  hidden: { opacity: 0,y:20 },
};
const textAni = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -100 },
};
  return (
    <div className="w-full pt-[20px] px-[5%] ">
      <motion.div
        ref={ref1}
        animate={controls}
        initial="hidden"
        variants={headingAni}
        className="text-center"
      >
        <h4 className="text-[1.2rem] text-mainRed font-Roboto font-medium">
          WELCOME TO
        </h4>
        <h5 className="text-[2rem] font-Oswald font-semibold text-dark-cl">
          {websiteData.name}
        </h5>
        <div className="w-[70px] h-1 bg-mainRed rounded mt-2 mx-auto"></div>
      </motion.div>

      <div className="flex items-center mt-[20px] gap-5 md:gap-3 flex-wrap">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={textAni}
          className="w-[100%] md:w-[58%]"
        >
          <h4 className="text-[1rem] md:text-[1.3rem] text-dark-cl font-poppins font-medium">
            ABOUT US
          </h4>
          <p className="text-[1.2rem]  md:text-[1.5rem] font-Roboto font-semibold text-blue-dark">
            <span className="capitalize">{websiteData.name}</span> is a premier
            stockist and supplier, specializing in a comprehensive range of
            ferrous and non-ferrous metals.{" "}
          </p>

          <div className="mt-4 border-l-2 border-dark-pink pl-4">
            <p className="text-[1rem] md:text-[1.1rem] font-poppins font-medium">
              {websiteData.name} is a rising industry frontrunner, excelling in
              Pipes, Tubes, Stainless Steel Pipes, Stainless Steel Tubes, Pipe
              Fittings, Flanges, Socketweld Fittings, Screwed Fittings,
              Fasteners, and Valves supply across India.
            </p>
          </div>
          <div className="mt-4 border-l-2 border-dark-pink pl-4">
            <p className="text-[1rem] md:text-[1.1rem] font-poppins font-medium">
              Diverse in materials like Stainless Steel, Carbon Steel, Mild
              Steel, we supply and stock various Ferrous and Non-Ferrous Metals.
              Our prime focus is collaborating with clients to comprehend their
              requirements, delivering quality products tailored to their needs.
            </p>
          </div>
          <div className="text-center md:text-left">
            <Link href="/about">
              <button className="relative inline-flex items-center justify-start px-6 py-3 border-[1px] border-solid border-mainRed overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mt-4">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-mainRed  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Read More..
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
          className="w-[100%] md:w-[40%] overflow-hidden square "
        >
          <Image
            className="w-full h-full border p-1 hover:scale-105 transition-all duration-700 rounded"
            src={aboutImg}
            alt=""
            width={600}
            height={400}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutHome