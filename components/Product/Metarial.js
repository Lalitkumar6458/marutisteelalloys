import React from 'react'
import { SpecialAlloysgrade } from '@/public/constantData'
import Application from './Application'
import SupplierCities from './SupplierCities'
import SupplierCountries from './SupplierCountries'
const Metarial = ({index,heading}) => {
    const data=SpecialAlloysgrade[index]
    console.log("data",data)
    const chunkedCities = [];
const chunkedproducts=[]
    // Split the listData into chunks of size 6
    for (let i = 0; i < data.grade.length; i += 3) {
      chunkedCities.push(data.grade.slice(i, i + 3));
    }
    for (let i = 0; i < data.products.length; i += 2) {
        chunkedproducts.push(data.products
            .slice(i, i + 2));
      }
  return (
   <div className=''>
   <div className='w-full'>
   <h2 className='w-full text-[2rem] border-b relative font-exo'>{data.heading}
   <div className='w-[100px] bg-mainRed  h-[3px]'></div>
   </h2>


   <div className='mt-5'>
   <p className='text-[1.2rem] font-Roboto font-medium'>{data.data.text1}</p>
   <p className='text-[1.1rem] font-Roboto mt-2'>{data.data.text2}</p>
   <p className='text-[1.1rem] font-Roboto mt-2'>{data.data.text3}</p>
   <p className='text-[1.1rem] font-Roboto mt-2'>{data.data.text4}</p>

   </div>
{
    data.grade.length !=0&&data.grade && <div className='mt-6'>
    <h2 className='w-full text-[2rem] border-b relative font-exo'>Type of Grades
    <div className='w-[100px] bg-mainRed  h-[3px]'></div>
    </h2>
 
    <div className=" overflow-auto">
        
    <table className="border-collapse border w-full mt-9">
      <thead>
        <tr>
          <th
            colSpan="6"
            className="py-2 bg-gray-600 text-white text-center"
          >
            Grades
          </th>
        </tr>
      </thead>
      <tbody>
        {chunkedCities.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
          >
            {row.map((city, columnIndex) => (
              <td
                key={columnIndex}
                className="border p-2 font-poppins text-[1rem] font-medium"
              >
                {city}
              </td>
            ))}
            {/* Fill the row with empty cells if needed */}
            {row.length < 3 &&
              Array.from({ length: 3 - row.length }).map(
                (_, emptyIndex) => (
                  <td
                    key={`empty-${emptyIndex}`}
                    className="border p-2 font-poppins"
                  ></td>
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

    </div>

}

{
    data.products
    .length !=0&&data.products
    && <div className='mt-6'>
    <h2 className='w-full text-[2rem] border-b relative font-exo'>Products-{data.heading}
    <div className='w-[100px] bg-mainRed  h-[3px]'></div>
    </h2>
 
    <div className=" overflow-auto">
        
    <table className="border-collapse border w-full mt-9">
      <thead>
        <tr>
          <th
            colSpan="6"
            className="py-2 bg-gray-600 text-white text-center"
          >
            Products
          </th>
        </tr>
      </thead>
      <tbody>
        {chunkedproducts.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
          >
            {row.map((city, columnIndex) => (
              <td
                key={columnIndex}
                className="border p-2 font-poppins text-[1rem] font-medium"
              >
                {city}
              </td>
            ))}
            {/* Fill the row with empty cells if needed */}
            {row.length < 2 &&
              Array.from({ length: 2 - row.length }).map(
                (_, emptyIndex) => (
                  <td
                    key={`empty-${emptyIndex}`}
                    className="border p-2 font-poppins"
                  ></td>
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

    </div>

}

<Application name={data.heading} />
<SupplierCities name={data.heading} />
<SupplierCountries name={data.heading} />
  
   </div>
   </div>
  )
}

export default Metarial