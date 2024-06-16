import React from 'react'
import { ButtweldWeldPipeFittingsData,ThreadedPipeFittingsData,SocketWeldPipeFittingsData } from '@/public/constantData';
import ProductCon from '@/components/Product/ProductCon';
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import img from "../../../public/Images/productImg.jpeg";
import RigthSideBox from '@/components/Product/RigthSideBox';
import Head from 'next/head';
const pipeFitting = () => {
     const router = useRouter();
     const { pipeFittingName } = router.query;
    let data = ButtweldWeldPipeFittingsData;
    let heading = '';
    let description = '';
    let keywords = '';
  
    if (pipeFittingName === "Buttweld_Pipe_Fittings") {
      data = ButtweldWeldPipeFittingsData;
      heading = "Buttweld Fittings";
      description = "Explore our range of Buttweld Pipe Fittings, including elbows, tees, reducers, and more.";
      keywords = "Buttweld Pipe Fittings, Buttweld Fittings, pipe fittings, elbows, tees, reducers";
    } else if (pipeFittingName === "Threaded_Pipe_Fittings") {
      data = ThreadedPipeFittingsData;
      heading = "Threaded Fittings";
      description = "Discover our Threaded Pipe Fittings, offering a secure and leak-free connection.";
      keywords = "Threaded Pipe Fittings, Threaded Fittings, pipe fittings, secure connection, leak-free";
    } else if (pipeFittingName === "Socket_Pipe_Fittings") {
      data = SocketWeldPipeFittingsData;
      heading = "Socket Weld Fittings";
      description = "Check out our Socket Weld Pipe Fittings, designed for high-pressure applications.";
      keywords = "Socket Weld Pipe Fittings, Socket Weld Fittings, pipe fittings, high-pressure applications";
    } else {
      router.push("/product/pipeFettings");
      return null;
    }
      return (
        <div className="">
        <Head>
        <title>{heading} - Maruti Steel Alloys</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={`${heading} - Maruti Steel Alloys`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.marutisteelalloys.com/product/pipeFettings/${pipeFittingName}`} />
        <meta property="og:image" content={`https://www.marutisteelalloys.com/${data.ogImg}`}/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${heading} - Maruti Steel Alloys`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://www.marutisteelalloys.com/${data.ogImg}`} />
      </Head>
          <PageHeading heading={heading} img={img} bredcurm="Product" />
          <div className="grid grid-cols-1 md:grid-cols-4 px-[5%] h-auto mt-[40px] mb-[40px] gap-3">
            <div className=" md:col-span-3 h-ful">
              <ProductCon data={data} name={heading} heading={true} grade={true} />
            </div>
            <div className="border ">
              <RigthSideBox
                pathname={`product/pipeFettings/${pipeFittingName}`}
              />
            </div>
          </div>
        </div>
      );
}

export default pipeFitting;