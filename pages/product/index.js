import PageHeading from '@/components/Base/PageHeading'
import React from 'react'
import img from "../../public/Images/productImg.jpeg"
import SectionHeading from '@/components/SmallComponents/SectionHeading'
import Link from 'next/link'
import Image from 'next/image'
const index = () => {

const productData=[
    {
        id:1,
        heading:"Pipe",
        img:require("../../public/Images/product/pipeImg.jpg"),
        text:"",
        link:"/product/pipe",
    },
    {
        id:2,
        heading:"Tubes",
        img:require("../../public/Images/product/img7.jpeg"),
        text:"",
        link:"/product/tubes",
    },
    {
        id:3,
        heading:"Flanges",
        img:require("../../public/Images/product/flange.png"),
        text:"",
        link:"/product/flanges",
    },
    {
        id:4,
        heading:"Fasteners",
        img:require("../../public/Images/product/img10.png"),
        text:"",
        link:"/product/fasteners",
    },
    {
        id:5,
        heading:"Valves",
        img:require("../../public/Images/product/valveImg.jpeg"),
        text:"",
        link:"/product/valves",
    },
    {
        id:6,
        heading:"Pipe Fettings",
        img:require("../../public/Images/product/pipeFettings.jpg"),
        text:"",
        link:"/product/pipeFettings",
    },
    {
        id:7,
        heading:"Sheet & Plate",
        img:require("../../public/Images/product/sheetImg.webp"),
        text:"",
        link:"/product/SheetAndPlate",
    },
    {
        id:8,
        heading:"COILS & STIRPS",
        img:require("../../public/Images/product/Bgimg1.png"),
        text:"",
        link:"/product/CoilsAndStirps",
    },
    {
        id:9,
        heading:"Gasket",
        img:require("../../public/Images/product/gasketImg.jpg"),
        text:"",
        link:"/product/gasket",
    }, {
        id:10,
        heading:"Dairy Fetting",
        img:require("../../public/Images/product/dairyImg.jpeg"),
        text:"",
        link:"/product/dairyFetting",
    },
]
  return (
    <div className=''>
    <PageHeading heading="Product" img={img} bredcurm="Product"/>

    <div className='mt-[40px] mb-[40px] px-[5%]'>
    <SectionHeading heading={"Our Premium-Quality Offerings"}/>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-[40px]'>
    {
        productData.map((item)=>{
            return <Link href={item.link}>
            <div className=' h-[350px] shadow-boxshadow rounded-md'>
            <div className='p-1 border h-[80%] rounded-md overflow-hidden'>
            <Image className='w-full h-full  hover:scale-110 transition-all duration-700 ease-in-out rounded-md' src={item.img} alt={item.heading} width={500} height={400}/>
            </div>
<div className='h-[20%] flex items-center justify-center'>
<h3 className='text-[1.4rem] font-Oswald font-medium text-dark-cl'>{item.heading}</h3>
</div>
            </div>
            </Link>
        })
    }
    
    </div>
    </div>
    </div>
  )
}

export default index