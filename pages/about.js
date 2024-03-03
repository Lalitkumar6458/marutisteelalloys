import React, { useEffect } from "react";
import img from "../public/Images/aboutImg.jpg"
import PageHeading from '@/components/Base/PageHeading'
import { websiteData } from '@/public/constantData'
import aboutimg from "../public/Images/About/homeAbout.jpg"
import bgImg from "../public/Images/About/bgImg.jpg"
import Image from 'next/image'
import SectionHeading from '@/components/SmallComponents/SectionHeading'
import Link from 'next/link'
import {IoEye} from "react-icons/io5"
import{FaEye} from "react-icons/fa"
import {motion} from "framer-motion"
const about = () => {
  const factSheet = [
    {
      heading: "Nature of Business",
      value: "Wholesale Trader Company",
    },
    {
      heading: "Company CEO",
      value: "MR. BHARAT MODI",
    },
    {
      heading: "Total Number of Employees",
      value: "Upto 10 People",
    },
    {
      heading: "Year of Establishment",
      value: "2015",
    },
    {
      heading: "Legal Status of Firm",
      value: "Individual - Proprietor",
    },
    {
      heading: "Annual Turnover",
      value: "Rs. 10-15 Crore",
    },
    {
      heading: "Banker",
      value: "KOTAK MAHINDRA BANK",
    },
    {
      heading: "GST No.",
      value: "27BREPG1665F1ZY",
    },
    {
      heading: "Payment Mode",
      value: "Cash,Credit Card,DD,Cheque",
    },
    {
      heading: "Shipment Mode",
      value: "By Road",
    },
  ];
  const OfferData=[{

    id:1,
    heading:"​TIMELY DELIVERY",
    text:"Leveraging our expertise, we orchestrate efficient, secure, and high-quality logistics operations, guaranteeing the punctual delivery of the precise metal products you require.",
    icon:require("../public/Images/Icons/Img1.png")
    
    },{
        id:2,
        heading:"COMPETITIVE PRICES",
        text:"As pioneers in the metals industry, we take immense pride in offering our clients not only superior-quality products but also at prices that are both reasonable and competitive.",
        icon:require("../public/Images/Icons/Img2.png")
    
    
    },
    {
        id:3,
        heading:"​QUALITY ACTIVITIES",
        text:"At Maruti Steel Alloys, we specialize in providing top-tier metal products that not only meet but exceed the most stringent specifications of our discerning clients.",
        icon:require("../public/Images/Icons/Img3.png")
    
    
    },
    {
        id:4,
        heading:"​LARGEST INVENTORY",
        text:"Benefit from our substantial stock and efficient delivery, where your satisfaction is paramount. Rely on us for dependable and punctual fulfillment of your requirements.",
        icon:require("../public/Images/Icons/Img4.png")
    
    
    },
    
    ]

     useEffect(() => {
       const sections = document.querySelectorAll(".animate-section");

       const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             entry.target.classList.add("in-view");
           } else {
             entry.target.classList.remove("in-view");
           }
         });
       });

       sections.forEach((section) => {
         observer.observe(section);
       });

       return () => {
         observer.disconnect();
       };
     }, []);
  return (
    <div>
      <PageHeading heading="About Us" img={img} bredcurm="about us" />
      <div className="mt-[40px] mb-[40px] px-[5%]">
        <SectionHeading heading={"Company Profile"} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center mt-[20px] gap-5 md:gap-3 flex-wrap animate-section"
        >
          <div className="w-[100%] ">
            <p className="text-[1.2rem]  md:text-[1.5rem] font-Roboto font-semibold text-blue-dark">
              <span className="capitalize">{websiteData.name}</span> is a
              premier stockist and supplier, specializing in a comprehensive
              range of ferrous and non-ferrous metals.{" "}
            </p>
 
            <div className="mt-2">
              <p className="text-[1rem] md:text-[1.1rem] font-poppins font-medium">
                {websiteData.name} stands as a rising industry leader in the
                realm of Pipes, Tubes, Stainless Steel Pipes, Stainless Steel
                Tubes, Pipe Fittings, Flanges, Socketweld Fittings, Screwed
                Fittings, Fasteners, and Valves Stockists, as well as being
                esteemed Suppliers in India
              </p>
            </div>
            <div className="mt-2 ">
              <p className="text-[1rem] md:text-[1.1rem] font-poppins font-medium">
                Our commitment lies in supplying and stockpiling an array of
                Ferrous and Non-Ferrous Metals, encompassing a diverse range of
                materials like Stainless Steel, Carbon Steel, Mild Steel, and
                more. Guided by a client-centric approach, we place paramount
                importance on comprehending our clients' requisites, enabling us
                to furnish them with impeccably tailored products that precisely
                cater to their demands.
              </p>
            </div>
            <div className="mt-2 ">
              <p className="text-[1rem] md:text-[1.1rem] font-poppins font-medium">
                Our ultimate mission revolves around delivering products of
                unparalleled quality, promptly and with utmost precision. Our
                quality assurance extends to our product manufacturing,
                underscored by an unwavering adherence to 100% compliance with
                rigorous international standards.
              </p>
            </div>
            <div className="mt-2">
              <p className="text-[1rem] md:text-[1.1rem] font-poppins font-medium">
                We are steadfast in our pledge to ensure the exceptional quality
                of our products, a commitment that remains unwavering through
                our unwavering compliance with international standards.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="">
          <div className="flex items-center justify-center flex-col gap-7 mt-[40px]">
            <SectionHeading heading={"fectSheet"} />
            <motion.table
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.26}}
              className="border-[1px] border-solid border-dark-cl border-collapse w-full animate-section"
            >
              <tbody>
                {factSheet.map((item) => {
                  return (
                    <tr>
                      <td className="border-[1px] border-solid border-dark-cl text-[1.2rem] p-2 font-Roboto font-semibold">
                        {item.heading}
                      </td>
                      <td className="border-[1px] border-solid border-dark-cl text-[1.2rem] p-2 font-poppins font-medium">
                        {item.value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </motion.table>
          </div>
        </div>
      </div>
      <div className=" relative w-full  mb-[40px] py-8">
        <Image
          className="w-full h-full absolute left-0 top-0 right-0"
          src={bgImg}
          alt=""
          width={1000}
          height={600}
        />
        <div className=" relative z-50 px-[5%]">
          <SectionHeading heading={"Why Choose Us"} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[40px] gap-5 h-full place-items-center">
            {OfferData.map((item) => {
              return (
                <div
                  className="shadow  p-3 flex items-center flex-col justify-center gap-3 border border-mainRed bg-[#ffffff65]"
                  key={item.id}
                >
                  <div className="bg-mainRed w-[50px] h-[50px] flex items-center justify-center rounded relative z-10 ">
                    <Image
                      src={item.icon}
                      alt=""
                      className="w-[30px] h-[30px]"
                      width={40}
                      height={40}
                    />
                  </div>

                  <h2 className="text-xl font-semibold text-dark-cl">
                    {item.heading}
                  </h2>
                  <p className="text-gray-600 text-center text-[0.9rem] font-Roboto md:h-[120px] text-ellipsis overflow-hidden">
                    {item.text}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-0 rounded bg-dark-cl group-hover:w-full  group-hover:h-full  transition-all duration-700"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mb-[40px] px-[5%]">
        <SectionHeading heading={"Our Certificate"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
          <div className="border p-1 overflow-hidden rounded-md relative">
            <Link
              className=" absolute top-[20px] right-[10px] z-50 text-[14px]"
              href="/Images/Certificate/img.jpg"
            >
              <span className="  absolute top-[10px] right-[10px] text-[25px] h-[40px] w-[40px] bg-dark-cl  rounded-full text-white  flex items-center justify-center">
                <FaEye className=" " />
              </span>
            </Link>
            <Image
              className="hover:scale-110 transition-all duration-700 ease-in-out"
              src={require("../public/Images/Certificate/img.jpg")}
              alt=""
              width={600}
              height={700}
            />
          </div>
          <div className="border p-1 overflow-hidden rounded-md relative">
            <Link
              className=" absolute top-[20px] right-[10px] z-50 text-[14px]"
              href="/Images/Certificate/img2.jpg"
            >
              <span className="  absolute top-[10px] right-[10px] text-[25px] h-[40px] w-[40px] bg-dark-cl  rounded-full text-white  flex items-center justify-center">
                <FaEye className=" " />
              </span>
            </Link>
            <Image
              className="hover:scale-110 transition-all duration-700 ease-in-out"
              src={require("../public/Images/Certificate/img2.jpg")}
              alt=""
              width={600}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default about