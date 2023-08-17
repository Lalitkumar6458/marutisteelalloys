import React, { useState } from 'react';
import Link from 'next/link'
import { FaSearch,FaBars, FaMinus } from 'react-icons/fa'
import {FiPlus} from "react-icons/fi"
import {LiaAngleRightSolid} from "react-icons/lia"
import { Button, Drawer } from 'antd';
const Header = () => {
  const [open, setOpen] = useState(false);
  const[mobileheaderChildShow,setMobileHeaderChildShow]=useState({
    Product:false,
    Material:false,
    Alloys:false
  })
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const data=[
    {
      name:"Home",
      link:"/"
    },
    {
      name:"About",
      link:"/about"
    },
    {
      name:"Product",
      link:"/",
      submenu:[
        {
          name:"Pipe",
          link:""
        },
        {
          name:"Tubes",
          link:""
        },
        {
          name:"Pipe Fittings",
          link:""
        },
        {
          name:"Flanges",
          link:""
        },
        {
          name:"Fasteners",
          link:""
        },
        {
          name:"Sheet & Plate",
          link:""
        },
        {
          name:"COILS & STIRPS",
          link:""
        },
        {
          name:"Valves",
          link:""
        }
      ]
    },
    {
      name:"Material",
      link:"/",
      submenu:[
        {
          name:"Alloys",
          link:"",
          submenu:[
            {
              name:"Inconel Alloys",
              link:"",
            },
            {
              name:"Monel Alloys",
              link:"",
            },
            {
              name:"Hastelloy",
              link:"",
            },
            {
              name:"Duplex Alloys",
              link:"",
            },
            {
              name:"Super Duplex Alloys",
              link:"",
            },
            {
              name:"Cupro Nickel Alloys",
              link:"",
            },
            {
              name:"SMO 254",
              link:"",
            },
            {
              name:"Alloy 20",
              link:"",
            },
            {
              name:"Titanium",
              link:"",
            },

          ]
        },
        {
          name:"Stainless Steel",
          link:""


        },
        {
          name:"Carbon Steel",
          link:""
        },
      ]

    },
    {
      name:"Quality",
      link:"/"
    },
    {
      name:"Contact",
      link:"/"
    },
    {
      name:"Gallery",
      link:"/"
    }
  ]

  const showSubmenuMobile=(name)=>{
    console.log("name",name)
    setMobileHeaderChildShow(
      {
        ...mobileheaderChildShow,
        [name]:!mobileheaderChildShow[name]
      }
    )
  }

  return (
  <div className='px-[5%] shadow-headerShadow h-[60px] flex items-center justify-center'>
<div className='flex items-center justify-between w-full'>
<div className='text-[1.6rem] font-heading font-medium text-dark-cl'>
Maruti Steel Alloys
</div>
<div className='flex items-center gap-5'>
<ul className='hidden items-center justify-center gap-5 md:flex'>
{
  data.map((item)=>{
    return <li key={item.name}  className='text-[1.2rem] font-poppins font-medium rounded-md hover:text-dark-pink text-primary-clr h-[60px] px-2 flex items-center justify-center relative group'>
    <Link href={item.link}>{item.name}</Link> {item.submenu?<FiPlus className='ml-[5px] cursor-pointer'/>:null}
{
  item.submenu?<ul className='top-[60px] absolute w-fit bg-white shadow-boxshadow pt-2 border-t-2 border-blue-dark hidden group-hover:block'>
  {
    item.submenu.map((each)=>{
      return <li key={each.name} className='text-[1rem]  whitespace-nowrap hover:text-dark-pink text-primary-clr h-[40px] px-5 border-b border-blue-dark flex items-center justify-between hover:border-l-2 relative childNav '><Link href={each.link}>{each.name}</Link>
      
      {each.submenu?<LiaAngleRightSolid/>:null}

      {
        each.submenu?<ul className='left-[101%] absolute top-[-2px] bg-white shadow-boxshadow border-t-2 border-blue-dark '>
        {
          each.submenu.map((every)=>{
            return  <li key={every.name}  className='text-[1rem]  whitespace-nowrap h-[40px] px-5 hover:text-dark-pink text-primary-clr  border-b border-blue-dark flex items-center justify-between hover:border-l-2 relative'><Link href={every.link}>{every.name}</Link></li>
          })
        }
        </ul>:null
      
      }
      </li>
    })
  }
  </ul>:null

}

    </li>
  })
}
</ul>
<button className=' hidden h-[50px] bg-primary-clr text-white rounded-md px-3 text-[1.3rem] font-exo md:flex items-center justify-center'>Catalogue
</button>
<div className='flex items-center gap-5'>
<FaSearch className='text-[1.2rem] cursor-pointer'/>
<FaBars onClick={showDrawer} className='text-[1.2rem] cursor-pointer md:hidden'/>
</div>
</div>

</div>
<Drawer title="Maruti Steel Alloys" width={300} placement="right" onClose={onClose} open={open}>
<div className=''>
<ul>
{data.map((item,index)=>{
  return <li className=' text-[1.2rem] pb-[10px] font-Roboto font-medium'><div className='flex items-center' key={item.name}>
  <Link href={item.link}>{item.name}</Link>
  {item.submenu?mobileheaderChildShow[item.name]?<FaMinus className='ml-[5px] cursor-pointer' onClick={()=>showSubmenuMobile(item.name)}/>:
    <FiPlus className='ml-[5px] cursor-pointer' onClick={()=>showSubmenuMobile(item.name)}/>
    :null}
  
  </div>
  {
    item.submenu?<ul className={`h-fit ml-5 shadow ${mobileheaderChildShow[item.name]?'':'hidden'}`}>
    {item.submenu.map((item,index)=>{
      return <li className='px-2 py-2' key={item.name}>
      <div className='flex items-center'>
      <Link href={item.link}>{item.name}</Link>
      {item.submenu?mobileheaderChildShow[item.name]?<FaMinus className='ml-[5px] cursor-pointer' onClick={()=>showSubmenuMobile(item.name)}/>:
      <FiPlus className='ml-[5px] cursor-pointer' onClick={()=>showSubmenuMobile(item.name)}/>
      :null}
      </div>
      {
        item.submenu?<ul className={`h-fit ml-5 shadow ${mobileheaderChildShow[item.name]?'':'hidden'}`}>
        {item.submenu.map((item,index)=>{
          return <li className='px-2 py-2' key={item.name}>
          <Link href={item.link}>{item.name}</Link>
          </li>
        })
      }
        </ul>:null
      }
      </li>
    })}
    </ul>:null
  }
  </li>
})}
</ul>
<button className='h-[50px] bg-primary-clr text-white rounded-md px-3 text-[1.3rem] font-exo md:flex items-center justify-center mt-4'>Catalogue
</button>
</div>
</Drawer>
  </div>
  )
}

export default Header