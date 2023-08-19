import React from 'react'
import {RiMoneyDollarCircleLine } from 'react-icons/ri';
import SectionHeading from '../SmallComponents/SectionHeading';
import {FaMedal,FaTools,FaHeadphones} from 'react-icons/fa'
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlineSafetyCertificate} from "react-icons/ai"
const WhyChooseUs = () => {
   
        const points = [
          {
            icon: <FaMedal />,
            title: "Quality and Innovation ",
            description: "At Marti Steel Alloys, we're driven by an unwavering commitment to excellence. Our dedication to quality craftsmanship and innovative solutions is the cornerstone of our success, ensuring that our products consistently meet and exceed industry standards.",
          },
          {
            icon: <FaTools />,
            title: "Customization ",
            description: "We understand that every project is unique. That's why we offer tailor-made solutions to cater to the distinct needs of our clients. Our flexible approach ensures that you get products that fit your specifications, making your vision a reality.",
          },
          {
            icon: <BiTimeFive />,
            title: "Timely Deliveries ",
            description: "We value your time as much as you do. With streamlined processes and efficient logistics, we guarantee on-time deliveries, ensuring your projects stay on track without any unnecessary delays.",
          },
          {
            icon: <RiMoneyDollarCircleLine />,
            title: "Competitive Prices ",
            description: "Quality doesn't have to come at a premium. We believe in providing value for your investment. Our competitive pricing ensures that you receive top-notch products without compromising your budget.",
          },
          {
            icon: <FaHeadphones />,
            title: "Excellent Customer Support ",
            description: "Your satisfaction is our priority. Our dedicated customer support team is here to assist you every step of the way. We're committed to addressing your queries promptly and ensuring a smooth experience from inquiry to after-sales support.",
          },
          {
            icon: <AiOutlineSafetyCertificate />,
            title: "ISO Certified Company ",
            description: "Marti Steel Alloys is proud to hold an ISO certification, a testament to our adherence to international quality and management standards. This recognition reflects our commitment to delivering products of the highest caliber.",
          },
        ];
  return (
    <div className='px-[5%] mt-[40px]  md:mt-[70px] mb-[40px]'>

    <SectionHeading text="SPECIFICATIONS" heading={"What We Offer"}/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {points.map((point, index) => (
        <div key={index} className=" shadow rounded-md p-3 flex items-center flex-col justify-center gap-3 border">
       <div className='text-[2rem] text-dark-pink'> {point.icon}</div>
          <div className="flex items-center flex-col justify-center gap-3">
            <h3 className="text-xl font-semibold text-dark-cl">{point.title}</h3>
            <p className="text-gray-600 text-center text-[0.9rem] font-Roboto md:h-[120px] text-ellipsis overflow-hidden">{point.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default WhyChooseUs