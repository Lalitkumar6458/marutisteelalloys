import { applicationsData } from '@/public/constantData';
import Image from 'next/image';
import React from 'react'
import { BiArrowFromLeft } from 'react-icons/bi';
import img from "../../public/Images/ProductMain/Group 1095.jpg";
const Application = ({name}) => {
  console.log("img", img);
  return (
    <div className="mt-9 mb-6">
      <div className=" border-b border-gray-500">
        <h3 className="text-[1.6rem] md:text-[2rem] font-Roboto font-semibold border-b-2 border-mainRed w-fit text-dark-cl">
          Applications and Uses of {name}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
        <div className="flex items-center justify-start">
          <ul>
            {applicationsData.listdata.map((item) => {
              return (
                <li
                  className="text-[1rem] md:text-[1.3rem] font-poppins mb-3 flex items-center gap-2"
                  key={item}
                >
                  <BiArrowFromLeft />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <img src={img.src}/>
        </div>
      </div>
    </div>
  );
}

export default Application