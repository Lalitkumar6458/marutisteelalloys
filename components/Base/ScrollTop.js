import { useState,useEffect } from 'react';
import { BiSolidUpArrowAlt } from 'react-icons/bi';
import {FaAngleUp} from "react-icons/fa"
const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowButton(scrollY > 0);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={` z-50 md:h-[30px] md:w-[30px] h-[40px] w-[40px]  rounded-[10px] fixed right-9 bottom-5 bg-mainRed text-white flex items-center justify-center text-[27px] md:text-[20px] ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClick}
    >
      <FaAngleUp />
    </button>
  );
};

export default ScrollTop;
