import React from 'react'

const Bottons = ({text}) => {
  return (
    <a href="#_" class="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-dark-cl bg-white rounded group">
    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-dark-cl rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-dark-cl"></span>
    <span class="relative text-white">{text}</span>
    </a>
  )
}

export default Bottons