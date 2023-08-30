import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionHeading = ({ text, heading }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const headingAni = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 20 },
  };
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={headingAni}
      className="w-full flex flex-col justify-center items-center"
    >
      {text ? (
        <h4 className="text-[1rem] text-dark-pink font-exo">{text}</h4>
      ) : null}
      <h1 className="text-[1.8rem] font-Roboto font-medium text-center">
        {heading}
      </h1>
      <div className="w-[70px] h-[3px] bg-dark-pink rounded"></div>
    </motion.div>
  );
};

export default SectionHeading;
