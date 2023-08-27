import React from 'react'
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import img from "../../../public/Images/AlloysImg.jpg"
import ProductCon from '@/components/Product/ProductCon';
import { StainlessSteel } from '@/public/constantData';
import RigthSideBox from '@/components/Product/RigthSideBox';
import Metarial from '@/components/Product/Metarial';
const subMenuName = () => {
    const data=StainlessSteel
    const router = useRouter();
    const { subMenuName} = router.query;
console.log("product",subMenuName)
let heading
let index=0
if(subMenuName == "InconelAlloys"){
    heading='Inconel Alloys '
    index=0
}else if(subMenuName == "MonelAlloys"){
    heading='Monel Alloys'
    index=1
}
else if(subMenuName == "DuplexAlloys"){
    heading='Duplex Alloys'
    index=3
}
else if(subMenuName == "Hastelloy"){
    heading='Hastelloy'
    index=2
}
else if(subMenuName == "SuperDuplexAlloys"){
    heading='Super Duplex Alloys'
    index=4
}
else if(subMenuName == "CuproNickelAlloys"){
    heading='Cupro Nickel Alloys'
    index=5
}else if(subMenuName == "SMO254"){
    heading='SMO 254'
    index=6
}else if(subMenuName == "Alloy20"){
    heading='Alloy 20'
    index=7
}else if(subMenuName=='Titanium'){
    index=8
     heading='Titanium'
}
else{
    heading=subMenuName
}
  return (
    <div>
    <PageHeading heading={heading} img={img} bredcurm="Product"/>
    
    
        <div className="grid grid-cols-1 md:grid-cols-4 px-[5%] h-auto mt-[40px] mb-[40px] gap-3">
          <div className=" md:col-span-3 h-ful">
            <Metarial index={index} heading={heading}/>
          </div>
          <div className="border shadow-lg rounded-md">
            <RigthSideBox pathname={`/material/alloys/${subMenuName}`} />
          </div>
        </div>
   



   </div>
  )
}

export default subMenuName