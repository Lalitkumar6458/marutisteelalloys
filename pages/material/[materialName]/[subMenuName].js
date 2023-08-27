import React from 'react'
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import img from "../../../public/Images/AlloysImg.jpg"
import ProductCon from '@/components/Product/ProductCon';
import { StainlessSteel } from '@/public/constantData';
import RigthSideBox from '@/components/Product/RigthSideBox';
const subMenuName = () => {
    const data=StainlessSteel
    const router = useRouter();
    const { subMenuName} = router.query;
console.log("product",subMenuName)
let heading
if(subMenuName == "InconelAlloys"){
    heading='Inconel Alloys '
}else if(subMenuName == "MonelAlloys"){
    heading='Monel Alloys'
}
else if(subMenuName == "DuplexAlloys"){
    heading='Duplex Alloys'
}
else if(subMenuName == "SuperDuplexAlloys"){
    heading='Super Duplex Alloys'
}
else if(subMenuName == "CuproNickelAlloys"){
    heading='Cupro Nickel Alloys'
}else if(subMenuName == "SMO254"){
    heading='SMO 254'
}else if(subMenuName == "Alloy20"){
    heading='Alloy 20'
}
else{
    heading=subMenuName
}
  return (
    <div>
    <PageHeading heading={heading} img={img} bredcurm="Product"/>
    
    
        <div className="grid grid-cols-1 md:grid-cols-4 px-[5%] h-auto mt-[40px] mb-[40px] gap-3">
          <div className=" md:col-span-3 h-ful">
            <ProductCon data={data} name={heading} grade={false} heading={false} />
          </div>
          <div className="border shadow-lg rounded-md">
            <RigthSideBox pathname={`/material/alloys/${subMenuName}`} />
          </div>
        </div>
   



   </div>
  )
}

export default subMenuName