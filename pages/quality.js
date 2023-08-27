import React from 'react'
import PageHeading from '@/components/Base/PageHeading'
import img from "../public/Images/qualityImg.jpg"
import Image from 'next/image'

import{FaBalanceScale} from "react-icons/fa"
import { RiStarFill, RiRocketFill, RiHandHeartFill,RiTestTubeFill, RiToolsFill, RiCheckDoubleFill, RiEyeFill } from 'react-icons/ri';
import SectionHeading from '@/components/SmallComponents/SectionHeading'
const quality = () => {
  const principles = [
    {
      icon: <RiStarFill />,
      heading: "Customer Satisfaction is Paramount",
      text: "Our utmost priority is to ensure the complete satisfaction of our customers."
    },
    {
      icon: <RiRocketFill />,
      heading: "Pioneering Excellence in Our Field",
      text: "Within our industry, we relentlessly pursue leadership, aiming to set the benchmark for excellence."
    },
    {
      icon: <RiHandHeartFill />,
      heading: "Unwavering Commitment to Honoring Commitments",
      text: "We are resolute in fulfilling our commitments to the best of our capabilities."
    },
    {
      icon: <FaBalanceScale />,
      heading: "Integrity and Fairness in All Endeavors",
      text: "As an organization, we are unwaveringly dedicated to upholding integrity and fairness in every facet of our operations."
    }
  ];
 const steps= [
    {
      icon: <RiTestTubeFill />,
      heading: "Comprehensive Material Testing",
      text: "Our process begins with rigorous testing of raw materials to ensure their integrity and suitability for our products."
    },
    {
      icon: <RiToolsFill />,
      heading: "Real-time Application Assessment",
      text: "Our adept technical team conducts thorough on-line assessments, scrutinizing every facet of the application process."
    },
    {
      icon: <RiCheckDoubleFill />,
      heading: "Rigorous Component Inspection",
      text: "Each finished component undergoes a rigorous inspection process. This encompasses both written and approved protocols as part of our Quality Management System."
    },
    {
      icon: <RiEyeFill />,
      heading: "Visual Inspection",
      text: "We emphasize visual scrutiny to ensure that every component meets our exacting standards."
    }
  ]
  return (
    <div>
    <PageHeading heading="Quality" img={img} bredcurm="quality"/>
    <div className='mt-[40px] mb-[40px] px-[5%]'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
    <div className=''>
    <h2 className='w-full text-[2rem] border-b relative font-exo'> Quality-Maruti Steel Alloys
    <div className='w-[100px] bg-mainRed  h-[3px]'></div>
    </h2>

    <p className='mt-3 text-[1rem] font-poppins'>
    Renowned for their exceptional quality and lasting endurance, our offerings have garnered widespread acclaim. Our production methodology is underpinned by a rigorous quality control framework aligned with global standards. This dedication to quality serves as a significant draw for our discerning clientele, resulting in a high level of consumer endorsement. Our team of adept quality control specialists diligently oversees the entire manufacturing continuum, commencing with the sourcing of raw materials and culminating with the dispatch of the finalized products.
    </p>
    <p className='mt-3 text-[1rem] font-poppins'>Furthermore, in accordance with the ethos of "Meeting our customers' needs and expectations, safeguarding the environment, and ensuring the well-being of our workforce," the General Director of Steel Builder has formulated a policy firmly grounded in the tenets of "Quality – Safety – Health – Environment." This policy is deeply rooted in the values of "Pride, Thoughtfulness, and Accountability."</p>
    </div>
    <div className=' overflow-hidden p-1 border rounded-md'>
    <Image className="w-full h-full hover:scale-125 rounded-md transition-all duretion-700 easy-in-out" src={require("../public/Images/qualityhome.jpg")} alt="" heigth={600} width={700}/>
    </div>
    </div>

    <div className='mt-5'>
    <SectionHeading heading={"Our Principles"}/>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-5'>
    {
      principles.map((point,index)=>{
        return   <div key={index} className=" shadow rounded-md p-3 flex items-center flex-col justify-center gap-3 border">
        <div className='text-[2rem] text-dark-pink'> {point.icon}</div>
           <div className="flex items-center flex-col justify-center gap-3">
             <h3 className="text-[1rem] font-semibold text-dark-cl text-center">{point.heading}</h3>
             <p className="text-gray-600 text-center text-[0.9rem] font-Roboto text-ellipsis overflow-hidden">{point.text}</p>
           </div>
         </div>
      })
    }
    </div>
    </div>

    <div className='mt-8'>
    <SectionHeading heading={"Quality Testing and Inspection Process"}/>
    <p className='mt-3 text-center text-[1.2rem] font-Roboto text-gray-700'>Our meticulous testing and inspection procedures uphold the highest standards of quality assurance. These steps are executed under the purview of accredited and approved laboratories.</p>

    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-5'>
    {
      steps.map((point,index)=>{
        return   <div key={index} className=" shadow rounded-md p-3 flex items-center flex-col justify-center gap-3 border">
        <div className='text-[2rem] text-dark-pink'> {point.icon}</div>
           <div className="flex items-center flex-col justify-center gap-3">
             <h3 className="text-[1rem] font-semibold text-dark-cl text-center">{point.heading}</h3>
             <p className="text-gray-600 text-center text-[0.9rem] font-Roboto text-ellipsis overflow-hidden">{point.text}</p>
           </div>
         </div>
      })
    }
    </div>
    </div>
 
    </div>
    </div>
  )
}

export default quality