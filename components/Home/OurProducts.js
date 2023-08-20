import React from 'react'
import SectionHeading from '../SmallComponents/SectionHeading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const OurProducts = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                },
              },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      };

      const productData=[
        {
            id:1,
            heading:"Pipe Fittings",
            desc:"Pipe fittings stand as one of the most extensively employed equipment in the plumbing, shipbuilding, and piping sectors, playing a pivotal role in various applications.",
            img:require("../../public/Images/OurProduct/img3.webp"),
            link:"/product/pipeFettings"
        },
        {
          id:6,
          heading:"Tubes",
          desc:"Our Tubes are precisely engineered to cater to a wide range of applications in industries such as shipbuilding, power plants, and Tubing, meeting the specific needs of each sector.",
          img:require("../../public/Images/product/img7.jpeg"),
          link:"/product/tubes"
      },
        {
            id:2,
            heading:"Flange",
            desc:"Renowned for their exceptional durability, extended lifespan, high-pressure resistance, and flawless quality, our flanges boast a flawless track record. We offer a comprehensive range of flange types to meet diverse needs.",
            img:require("../../public/Images/OurProduct/img7.jpg"),
            link:"/product/flanges"
        },
        {
            id:3,
            heading:"Pipe",
            desc:"Our Pipe & Tubes are precisely engineered to cater to a wide range of applications in industries such as shipbuilding, power plants, and piping, meeting the specific needs of each sector.",
            img:require("../../public/Images/OurProduct/stainless-steel-pipe-500x500.jpg"),
            link:"/product/pipe"
        },
        {
            id:4,
            heading:"Fasteners",
            desc:"Our fasteners are celebrated for their remarkable durability, extended lifespan, capacity to endure high pressures, and impeccable quality assurance. We provide a complete spectrum of fastener types to accommodate a wide array of requirements.",
            img:require("../../public/Images/OurProduct/Fimg1.jpg"),
            link:"/product/fasteners"
        },
        {
            id:5,
            heading:"Dairy Fittings",
            desc:"Dairy fittings are widely acclaimed for their exceptional durability, prolonged service life, ability to withstand stringent hygiene standards, and impeccable quality assurance. We offer an extensive range of dairy fitting types to cater to diverse industry demands.",
            img:require("../../public/Images/OurProduct/dairyImg.jpg"),
            link:"/product/dairyFetting"
        }
        // {
        //     id:6,
        //     heading:"Stainless Steel Material",
        //     desc:"Stainless steel, a fundamental raw material, encompasses a spectrum of forms including pipes, rods, round bars, sheets, plates, and wires, among others. Esteemed for its corrosion resistance, mechanical strength, and versatility, it serves as a cornerstone in diverse industrial applications.",
        //     img:require("../../public/Images/OurProduct/img3.webp"),
        //     link:""
        // },
      ]
  return (
   <div className='mt-[40px] mb-[40px] ourProducts px-[5%]'>
   <SectionHeading text={'What We Do'} heading={'Our Products'}/>

   <div className='mt-5'>
   <Slider {...settings}>
   {productData.map((item) => {
    return (
      <div className="h-[500px] mr-[10px] rounded p-2 shadow-boxshadow relative border border-dark-cl" key={item.id}>

     <div className=''>

     <div className='overflow-hidden rounded-md'>
     <Image className='w-full h-[250px] rounded-md border hover:scale-110 transition-all duration-700 ease-in-out' src={item.img} alt={item.heading} width={600} height={500} />
     </div>
     <div className='bg-white mt-2'>
     <h3 className='text-[1.4rem] font-Roboto font-medium text-dark-cl'>{item.heading}</h3>
     <p className='text-[0.84rem] font-poppins font-medium'>{item.desc}</p>
     </div>
     <div className='bottom-2 absolute left-3'>
     <Link href={item.link} className='flex items-center text-[1rem] text-dark-pink gap-3 font-medium'>Read More <FaArrowRight/></Link>
     </div>
     </div>
      </div>
    );
  })}
   </Slider>
   </div>
   </div>
  )
}

export default OurProducts