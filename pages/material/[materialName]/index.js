import React from 'react'
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import alloysImg from "../../../public/Images/AlloysImg.jpg" 
import ProductCon from '@/components/Product/ProductCon';
import RigthSideBox from '@/components/Product/RigthSideBox';
import { StainlessSteel,CarbonSteel } from '@/public/constantData';
import Head from 'next/head';
const index = () => {
  let data=StainlessSteel
    const router = useRouter();
    const { materialName} = router.query;
console.log("product",materialName)
let heading
let description = '';
  let keywords = '';
  let ogImg = '/Images/ProductMain/stainlesssteel/img1.jpg'; 
if(materialName=="StainlessSteel"){
    heading="Stainless Steel"
    data=StainlessSteel
    description=StainlessSteel.text1,
    ogImg=StainlessSteel.ogImg
}else if(materialName == "CarbonSteel"){
heading="Carbon Steel"
data=CarbonSteel
description=CarbonSteel.text1,
ogImg=CarbonSteel.ogImg
}

else{
    heading=materialName
}
  return (
    <div>
    <Head>
    <title>{heading} - Maruti Steel Alloys</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${heading} - Maruti Steel Alloys`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://www.marutisteelalloys.com/material/${materialName}`} />
    <meta property="og:image" content={`https://www.marutisteelalloys.com/${ogImg}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`${heading} - Maruti Steel Alloys`} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`https://www.marutisteelalloys.com/${ogImg}`} />
  </Head>
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