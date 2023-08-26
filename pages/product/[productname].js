import React from 'react'
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import img from "../../public/Images/productImg.jpeg"
import ProductCon from '@/components/Product/ProductCon';
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
      <PageHeading heading={heading} img={img} bredcurm="Product" />
      <div className="grid grid-cols-4 px-[5%]">
        <div className=" col-span-3">
          <ProductCon />
        </div>
        <div className="">
        
        </div>
      </div>
    </div>
  );
}

export default productname