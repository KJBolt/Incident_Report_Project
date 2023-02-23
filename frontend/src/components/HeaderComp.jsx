import React from 'react';


function HeaderComp({logo, title}) {
  return (
    <div className='border-b-2 flex flex-row items-center p-5'>
      <img 
          className='mr-3 h-[50px] w-[50px]'
          src={logo} 
          alt="Incidence" 
      />
      <p className='font-medium text-md'>{title}</p>
    </div>
  )
}

export default HeaderComp