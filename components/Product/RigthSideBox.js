import Link from 'next/link'
import React from 'react'
import { MdDoubleArrow, MdOutlineMailOutline } from "react-icons/md";
import { useRouter } from "next/router";
import ContactForm from '../Base/ContactForm';
import { websiteData } from '@/public/constantData';
import {LiaPhoneVolumeSolid} from "react-icons/lia"
const RigthSideBox = ({ pathname }) => {
  const router = useRouter();
  const currentPathname = router.pathname;
  console.log(pathname, "currentPathname");
  const product = [
    {
      name: "Pipe",
      link: "/product/pipe",
    },
    {
      name: "Tubes",
      link: "/product/tubes",
    },
    {
      name: "Pipe Fittings",
      link: "/product/pipeFettings",
    },
    {
      name: "Flanges",
      link: "/product/flanges",
    },
    {
      name: "Fasteners",
      link: "/product/fasteners",
    },
    {
      name: "Sheet & Plate",
      link: "/product/SheetAndPlate",
    },
    {
      name: "COILS & STIRPS",
      link: "/product/CoilsAndStirps",
    },
    {
      name: "Valves",
      link: "/product/valves",
    },
    {
      name: "Gasket",
      link: "/product/gasket",
    },
  ];
  const Material = [
    {
      name: "Stainless Steel",
      link: "/material/StainlessSteel",
    },
    {
      name: "Carbon Steel",
      link: "/material/CarbonSteel",
    },
    {
      name: "Inconel Alloys",
      link: "/material/alloys/InconelAlloys",
    },
    {
      name: "Monel Alloys",
      link: "/material/alloys/MonelAlloys",
    },
    {
      name: "Hastelloy",
      link: "/material/alloys/Hastelloy",
    },
    {
      name: "Duplex Alloys",
      link: "/material/alloys/DuplexAlloys",
    },
    {
      name: "Super Duplex Alloys",
      link: "/material/alloys/SuperDuplexAlloys",
    },
    {
      name: "Cupro Nickel Alloys",
      link: "/material/alloys/CuproNickelAlloys",
    },
    {
      name: "SMO 254",
      link: "/material/alloys/SMO254",
    },
    {
      name: "Alloy 20",
      link: "/material/alloys/Alloy20",
    },
    {
      name: "Titanium",
      link: "/material/alloys/Titanium",
    },
  ];

  return (
    <div className="px-3 py-2">
      <div className="">
        <div className="border-b">
          <h2 className="w-fit text-[1.6rem] font-exo font-medium border-b-[2px] border-mainRed">
            Our Products
          </h2>
        </div>
        <div className="mt-4">
          {product.map((item) => {
            return (
              <Link href={item.link} key={item.name}>
                <div
                  className={`w-full h-[50px]  border-l-[3px] ${
                    pathname == item.link
                      ? "bg-dark-cl text-white"
                      : "bg-[#f6f6f6]"
                  } border-dark-cl rounded-md flex items-center justify-between px-3 text-[1.2rem] font-Oswald mb-2 hover:bg-dark-cl hover:text-white transition-all duration-300 ease-in-out
                  `}
                >
                  <h3>{item.name}</h3>
                  <MdDoubleArrow />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <div className="border-b">
          <h2 className="w-fit text-[1.6rem] font-exo font-medium border-b-[2px] border-mainRed">
            Material
          </h2>
        </div>
        <div className="mt-4">
          {Material.map((item) => {
            return (
              <Link href={item.link} key={item.name}>
                <div
                  className={`w-full h-[50px]  border-l-[3px] ${
                    pathname == item.link
                      ? "bg-dark-cl text-white"
                      : "bg-[#f6f6f6]"
                  } border-dark-cl rounded-md flex items-center justify-between px-3 text-[1.2rem] font-Oswald mb-2 hover:bg-dark-cl hover:text-white transition-all duration-300 ease-in-out
                  `}
                >
                  <h3>{item.name}</h3>
                  <MdDoubleArrow />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <div className="border-b">
          <h2 className="w-fit text-[1.6rem] font-exo font-medium border-b-[2px] border-mainRed">
            Get A Quote
          </h2>
        </div>

        <div className="mt-5">
          <ContactForm />
        </div>

        <div className="mt-5">
          <div className="border-b">
            <h2 className="w-fit text-[1.6rem] font-exo font-medium border-b-[2px] border-mainRed">
              Contact Us
            </h2>
          </div>
          <div className="mt-5">
            <h2 className="text-[1.5rem] font-poppins text-dark-cl font-medium">
              Phone Number
            </h2>
            <div className="mt-3">
              <h5 className="text-[1.2rem] font-Roboto text-gray-800">
                {websiteData.contactInfo.contactPerson}
              </h5>
              <p className="flex gap-2 items-center mt-1 font-poppins text-[1rem] font-normal">
                <LiaPhoneVolumeSolid />
                +91 {websiteData.contactInfo.mobileNo[0]}
              </p>
              <p className="flex gap-2 items-center mt-1 font-poppins text-[1rem] font-normal">
                <LiaPhoneVolumeSolid />
                +91 {websiteData.contactInfo.mobileNo[1]}
              </p>

              <h5 className="text-[1.2rem] font-Roboto text-gray-800 mt-5">
                Office No
              </h5>
              <p className="flex gap-2 items-center mt-1 font-poppins text-[1rem] font-normal">
                <LiaPhoneVolumeSolid />
                +91 {websiteData.contactInfo.officeNo[0]}
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-[1.5rem] font-poppins text-dark-cl font-medium">
              Email
            </h2>
            <div className="mt-3">
              <p className="flex gap-2 items-center mt-1 font-poppins text-[1rem] font-normal">
                <MdOutlineMailOutline />
                {websiteData.contactInfo.email[0]}
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-[1.5rem] font-poppins text-dark-cl font-medium">
              Address
            </h2>
            <div className="mt-3">
              <p className="flex gap-2 items-center mt-1 font-poppins text-[1rem] font-normal">
                {websiteData.contactInfo.address[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RigthSideBox