import React from 'react'

const SectionHeading = ({text,heading}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
    {
      text? <h4 className='text-[1rem] text-dark-pink font-exo'>{text}</h4>:null
    }
    <h1 className='text-[1.8rem] font-Roboto font-medium'>{heading}</h1>
    <div className='w-[70px] h-[3px] bg-dark-pink rounded'></div>
    </div>
  )
}

export default SectionHeading