import React from 'react'
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import img from "../../../public/Images/AlloysImg.jpg"
import ProductCon from '@/components/Product/ProductCon';
import { SpecialAlloysgrade, StainlessSteel } from '@/public/constantData';
import RigthSideBox from '@/components/Product/RigthSideBox';
import Metarial from '@/components/Product/Metarial';
import Head from 'next/head';
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
const dataAlloys=SpecialAlloysgrade[index]
let description = dataAlloys.data.text1;
  let ogImg = '/Images/ProductMain/stainlesssteel/img1.jpg'; 

  return (
    <div>
    <Head>
    <title>{heading} - Maruti Steel Alloys</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${heading} - Maruti Steel Alloys`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://www.marutisteelalloys.com/material/alloys/${subMenuName}`} />
    <meta property="og:image" content={`https://www.marutisteelalloys.com/${ogImg}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`${heading} - Maruti Steel Alloys`} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`https://www.marutisteelalloys.com/${ogImg}`} />
  </Head>
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