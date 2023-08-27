import React from 'react'
import {
  GradeData,
  applicationsData,
  pipeData,
  ValvesData,
  GasketData,
  SocketWeldPipeFittingsData,
} from "@/public/constantData";
import Image from 'next/image'
import Link from 'next/link'
import {BiArrowFromLeft} from "react-icons/bi"
import Application from './Application'
import SupplierCities from './SupplierCities'
import SupplierCountries from './SupplierCountries';

const ProductCon = ({data,name,grade,heading}) => {
    console.log(name,"name")
   
const SpecificationsKey = Object.keys(data.Specifications);
const GradeKey = Object.keys(GradeData.gardeData);

  return (
    <div className="">
      <div className="w-full h-[400px] p-1 border rounded-md overflow-hidden">
        <Image
          className="w-full h-full object-fill hover:scale-110 transition-all duration-700 ease-in-out rounded-md"
          src={data.img}
          alt={data.name}
          width={700}
          height={500}
        />
      </div>
      <div className="mt-4">
        <h1 className="text-[1.8rem] md:text-[2.3rem] font-Roboto font-semibold text-dark-cl">
          {name} Supplier & Stockist in India - Excel Steels
        </h1>

        <div className="">
          <p className="text-[1rem] md:text-[1.1rem] font-poppins font-normal my-5">
            {data.text1}
          </p>
          {
            heading?<h2 className="text-[1.4rem]  md:text-[2rem] font-Roboto font-semibold text-dark-cl">
            {data.heading}
          </h2>:null
          }
          
          <p className="text-[1rem] md:text-[1.1rem] font-poppins font-normal my-5">
            {data.text2}
          </p>
          <p className="text-[1rem] md:text-[1.1rem] font-poppins font-normal my-5">
            {data.text3}
          </p>

          <div className=" border-b border-gray-500">
            <h3 className="text-[1.6rem] md:text-[2rem] font-Roboto font-semibold border-b-2 border-mainRed w-fit text-dark-cl">
              Specifications - { name }
            </h3>
          </div>
          <div className="mt-3 ">
            <div className="overflow-auto">
              <table className="border border-collapse w-full">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="w-[20%] text-center border text-[1rem] md:text-[1.2rem] font-Roboto rounded-l">
                      {name}
                    </th>
                    <th className="w-[80%] text-center border text-[1rem] md:text-[1.2rem] font-Roboto rounded-r">
                      Specifications
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SpecificationsKey.map((item) => {
                    return (
                      <tr className=" even:bg-slate-200">
                        <td className="w-[20%] text-center border font-Roboto text-[1rem] md:text-[1.1rem] py-1 font-medium">
                          {item}
                        </td>
                        <td className="w-[80%] text-center border font-Roboto text-[1rem] md:text-[1.1rem] py-1">
                          {data.Specifications[item]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {
              grade?<div className="overflow-auto">
              <table className="border border-collapse w-full">
                <thead>
                  <tr className="">
                    <th className="w-[20%] text-center border text-[1rem] md:text-[1.1rem] font-Roboto rounded-l"></th>
                    <th className="w-[80%] text-center border text-[1rem] md:text-[1.1rem] font-Roboto rounded-r">
                      {GradeData.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {GradeKey.map((item) => {
                    return (
                      <tr className=" even:bg-slate-200">
                        <td className="w-[20%] text-center border font-Roboto text-[1rem] md:text-[1.1rem] py-1 font-medium">
                          {item}
                        </td>
                        <td className="w-[80%] text-center border font-Roboto text-[1rem] md:text-[1.1rem] py-1">
                          {GradeData.gardeData[item]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>:null
            }
            
          </div>
          <div className=" border-b border-gray-500 mt-[40px]">
            <h3 className="text-[1.6rem] md:text-[2rem] font-Roboto font-semibold border-b-2 border-mainRed w-fit text-dark-cl">
              Types - {name}
            </h3>
          </div>

          <div className=" mb-[40px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[40px]">
              {data.type.map((item) => {
                return (
                  <Link href="#">
                    <div className=" h-[300px] shadow-boxshadow rounded-md">
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
                        <h3 className="text-[1.3rem] font-Oswald font-medium text-dark-cl">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <Application name={name} />
          <SupplierCities name={name} />
          <SupplierCountries name={name} />
        </div>
      </div>
    </div>
  );
}

export default ProductCon