import React from 'react'
import { ButtweldWeldPipeFittingsData,ThreadedPipeFittingsData,SocketWeldPipeFittingsData } from '@/public/constantData';
import ProductCon from '@/components/Product/ProductCon';
import { useRouter } from 'next/router';
import PageHeading from '@/components/Base/PageHeading';
import img from "../../../public/Images/productImg.jpeg";
import RigthSideBox from '@/components/Product/RigthSideBox';
const pipeFitting = () => {
     const router = useRouter();
     const { pipeFittingName } = router.query;
    let data = ButtweldWeldPipeFittingsData;
    let heading
    if (pipeFittingName == "Buttweld_Pipe_Fittings") {
        data = ButtweldWeldPipeFittingsData;
        heading="Buttweld Fittings"
    } else if (pipeFittingName == "Threaded_Pipe_Fittings") {
        data = ThreadedPipeFittingsData;
        heading = "Threaded Fittings";

    } else if (pipeFittingName == "Socket_Pipe_Fittings") {
        data = SocketWeldPipeFittingsData;
        heading = "Socket Weld Fittings";

    } else {
        router.push("/product/pipeFettings");
    }
      return (
        <div className="">
          <PageHeading heading={heading} img={img} bredcurm="Product" />
          <div className="grid grid-cols-1 md:grid-cols-4 px-[5%] h-auto mt-[40px] mb-[40px] gap-3">
            <div className=" md:col-span-3 h-ful">
              <ProductCon data={data} name={heading} />
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