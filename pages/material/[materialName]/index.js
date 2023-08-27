import React from 'react'
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import alloysImg from "../../../public/Images/AlloysImg.jpg" 
import ProductCon from '@/components/Product/ProductCon';
import RigthSideBox from '@/components/Product/RigthSideBox';
import { StainlessSteel,CarbonSteel } from '@/public/constantData';
const index = () => {
  let data=StainlessSteel
    const router = useRouter();
    const { materialName} = router.query;
console.log("product",materialName)
let heading
if(materialName=="StainlessSteel"){
    heading="Stainless Steel"
    data=StainlessSteel
}else if(materialName == "CarbonSteel"){
heading="Carbon Steel"
data=CarbonSteel
}

else{
    heading=materialName
}
  return (
    <div>
    <PageHeading heading={heading} img={alloysImg} bredcurm="Material"/>
    <div className="grid grid-cols-1 md:grid-cols-4 px-[5%] h-auto mt-[40px] mb-[40px] gap-3">
    <div className=" md:col-span-3 h-ful">
      <ProductCon data={data} name={heading} grade={false} heading={false} />
    </div>
    <div className="border shadow-lg rounded-md">
      <RigthSideBox pathname={`/material/${materialName}`} />
    </div>
  </div>
    </div>
  )
}
    
export default index