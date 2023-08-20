import React from 'react'
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import alloysImg from "../../../public/Images/AlloysImg.jpg" 
const index = () => {
    const router = useRouter();
    const { materialName} = router.query;
console.log("product",materialName)
let heading
if(materialName=="StainlessSteel"){
    heading="Stainless Steel"
}else if(materialName == "CarbonSteel"){
heading="Carbon Steel"
}

else{
    heading=materialName
}
  return (
    <div>
    <PageHeading heading={heading} img={alloysImg} bredcurm="Material"/>
    {materialName}
    </div>
  )
}
    
export default index