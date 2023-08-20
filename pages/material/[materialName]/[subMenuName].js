import React from 'react'
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import img from "../../../public/Images/AlloysImg.jpg"
const subMenuName = () => {
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
    
    subMenuName{subMenuName}</div>
  )
}

export default subMenuName