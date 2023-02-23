import React from 'react';

function FormComp({city, country, desc, cityValue, countryValue, descValue}) {
 
  return (
    <div className='flex flex-col items-center w-[100%] px-10 xl:px-20'>
        <input 
          type="text" 
          placeholder='City' 
          className='border-2 rounded-md w-[100%] my-3 p-3'
          onChange={(e) => cityValue(e.target.value)}
          value={city}
        />

        <input 
          type="text" 
          placeholder='Country' 
          className='border-2 rounded-md w-[100%] my-3 p-3'
          onChange={(e) => countryValue(e.target.value)}
          value={country}
        />
        <textarea 
          cols="30" 
          rows="5" 
          placeholder='Incident Desc'
          aria-multiline 
          className='border-2 rounded-md w-[100%] my-3 p-3'
          onChange={(e) => descValue(e.target.value)}
          value={desc}
        />
    </div>
  )
}

export default FormComp