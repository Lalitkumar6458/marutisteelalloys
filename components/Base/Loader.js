import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
    <div className="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <h3 className='text-[1.2rem] font-Oswald font-medium'>Loading...</h3>
  </div>
  )
}

export default Loader