import React from 'react'
import img from "../../../public/Images/productImg.jpeg";
import PageHeading from '@/components/Base/PageHeading';
import SectionHeading from '@/components/SmallComponents/SectionHeading';
import Link from "next/link";
import Image from "next/image";
import { pipeFittingDat } from '@/public/constantData';
const PipeFitting = () => {
  return (
    <div className="">
      

      <div className="mt-[40px] mb-[40px] px-[5%]">
        <SectionHeading heading={"We Offering Pipe Fittings"} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[40px]">
          {pipeFittingDat.type.map((item) => {
            return (
              <Link href={item.link}>
                <div className=" h-[350px] shadow-boxshadow rounded-md">
                  <div className="p-1 border h-[80%] rounded-md overflow-hidden">
                    <Image
                      className="w-full h-full  hover:scale-110 transition-all duration-700 ease-in-out rounded-md"
                      src={item.img}
                      alt={item.name}
                      width={500}
                      height={400}
                    />
                  </div>
                  <div className="h-[20%] flex items-center justify-center">
                    <h3 className="text-[1.4rem] font-Oswald font-medium text-dark-cl">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PipeFitting