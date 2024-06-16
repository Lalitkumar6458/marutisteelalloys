import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageHeading from "@/components/Base/PageHeading";
import img from "../../../public/Images/productImg.jpeg";

import ProductCon from "@/components/Product/ProductCon";

import {
  pipeData,
  FlangesData,
  ValvesData,
  tubeData,
  fastenersData,
  GasketData,
  SheetPlateData,
  CoilsStripData,
  DairyFittings
} from "@/public/constantData";
import PipeFitting from "@/components/Product/PipeFittings/PipeFitting";
import RigthSideBox from "@/components/Product/RigthSideBox";
import Head from "next/head";
const index = () => {
  const router = useRouter();
  const [isPipeFitting,setIsPipeFitting]=useState(false)
  const { productname } = router.query;
  let data;
  let heading = '';
  let description = '';
  let keywords = '';
  let pipeFitting=false
  let ogImg = '/Images/ProductMain/stainlesssteel/img1.jpg'; // Default image if not specified in data

  switch (productname) {
    case "SheetAndPlate":
      heading = "Sheet & Plate";
      data = SheetPlateData;
      description = "Discover our extensive range of Sheet and Plate products, perfect for various industrial applications.";
      keywords = "Sheet, Plate, industrial applications, metal sheets, metal plates";
      ogImg = SheetPlateData.ogImg;
      break;
    case "pipeFettings":
      heading = "Pipe Fittings";
      description = "Explore our wide selection of Pipe Fittings suitable for diverse industrial needs.";
      keywords = "Pipe Fittings, industrial fittings, pipes, fittings";
      ogImg = '/Images/ProductMain/stainlesssteel/img1.jpg';
      setIsPipeFitting(true)
      pipeFitting=true
      break;
    case "CoilsAndStirps":
      heading = "COILS & STRIPS";
      data = CoilsStripData;
      description = "Browse through our high-quality Coils and Strips, ideal for various manufacturing processes.";
      keywords = "Coils, Strips, manufacturing, metal coils, metal strips";
      ogImg = CoilsStripData.ogImg;
      break;
    case "valves":
      heading = 'Valves';
      data = ValvesData;
      description = "Check out our durable and reliable Valves for all your industrial applications.";
      keywords = "Valves, industrial valves, durable valves, reliable valves";
      ogImg = ValvesData.ogImg;
      break;
    case "pipe":
      heading = 'Pipes';
      data = pipeData;
      description = "Discover our range of high-quality Pipes suitable for various industrial uses.";
      keywords = "Pipes, industrial pipes, high-quality pipes";
      ogImg = pipeData.ogImg;
      break;
    case "tubes":
      heading = 'Tubes';
      data = tubeData;
      description = "Explore our Tubes, designed for superior performance in industrial settings.";
      keywords = "Tubes, industrial tubes, superior performance";
      ogImg = tubeData.ogImg;
      break;
    case "flanges":
      heading = 'Flanges';
      data = FlangesData;
      description = "Find the perfect Flanges for your piping systems with our wide selection.";
      keywords = "Flanges, piping systems, metal flanges";
      ogImg = FlangesData.ogImg;
      break;
    case "fasteners":
      heading = 'Fasteners';
      data = fastenersData;
      description = "Choose from our extensive range of Fasteners for all your construction needs.";
      keywords = "Fasteners, construction, metal fasteners";
      ogImg = fastenersData.ogImg;
      break;
    case "gasket":
      heading = 'Gasket';
      data = GasketData;
      description = "Get high-quality Gaskets to ensure a secure seal for various applications.";
      keywords = "Gasket, secure seal, industrial gaskets";
      ogImg = GasketData.ogImg;
      break;
    case "dairyFetting":
      heading = 'Dairy Fittings';
      data = DairyFittings;
      description = "Discover our Dairy Fittings, designed for efficiency and reliability in dairy processing.";
      keywords = "Dairy Fittings, dairy processing, reliable fittings";
      ogImg = DairyFittings.ogImg;
      break;
    default:
      router.push("/product");
      return null;
  }

  return (
    <div>
    <Head>
    <title>{heading} - Maruti Steel Alloys</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={`${heading} - Maruti Steel Alloys`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://www.marutisteelalloys.com/product/${productname}`} />
    <meta property="og:image" content={`https://www.marutisteelalloys.com/${ogImg}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`${heading} - Maruti Steel Alloys`} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`https://www.marutisteelalloys.com/${ogImg}`} />
  </Head>
      <PageHeading heading={heading} img={img} bredcurm="Product" />

      {pipeFitting ? (
        <div className="">
          <PipeFitting />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 px-[5%] h-auto mt-[40px] mb-[40px] gap-3">
          <div className=" md:col-span-3 h-ful">
            <ProductCon data={data} name={heading} heading={true} grade={true} />
          </div>
          <div className="border shadow-lg rounded-md">
            <RigthSideBox pathname={`/product/${productname}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
