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
const index = () => {
  const router = useRouter();
  const [isPipeFitting,setIsPipeFitting]=useState(false)
  const { productname } = router.query;
  let data = pipeData;
  let pipeFitting=false
  console.log("product", productname);
  let heading;
  if (productname == "SheetAndPlate") {
    heading = "Sheet & Plate ";
    data = SheetPlateData;
  } else if (productname == "pipeFettings") {
    heading = "Pipe Fettings";
    pipeFitting=true
  } else if (productname == "CoilsAndStirps") {
    heading = "COILS & STIRPS";
    data = CoilsStripData;
  } else if (productname == "valves") {
    heading='Valves'
    data = ValvesData;
  } else if (productname == "pipe") {
    heading='Pipes'
    data = pipeData;
  } else if (productname == "tubes") {
    heading='Tubes'
    data = tubeData;
  } else if (productname == "flanges") {
    heading='Flanges'
    data = FlangesData;
  } else if (productname == "fasteners") {
    heading='fasteners'
    data = fastenersData;
  } else if (productname == "gasket") {
    heading='Gasket'
    data = GasketData;
  } 
  else if (productname == "dairyFetting") {
    heading='Dairy Fettings'
    data = DairyFittings;
  }
  else {
     router.push("/product");
  }


  return (
    <div>
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
