import React from 'react'
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import img from "../../public/Images/productImg.jpeg"
const productname= () => {
    const router = useRouter();
    const { productname} = router.query;
console.log("product",productname)
let heading
if(productname == "SheetAndPlate"){
    heading='Sheet & Plate '
}else if(productname == "pipeFettings"){
    heading='Pipe Fettings'
}
else if(productname == "CoilsAndStirps"){
    heading='COILS & STIRPS'
}
else{
    heading=productname
}

  return (
    <div>
    <PageHeading heading={heading} img={img} bredcurm="Product"/>
    <h1>{productname}</h1>
    </div>
  )
}

export default productname