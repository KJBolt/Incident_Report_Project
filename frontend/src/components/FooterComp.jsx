import React from 'react'

function FooterComp({name, handleClick}) {
    
    return (
        <div className='flex flex-row justify-center p-3 bg-[#f2f2f2]'>
            <p 
                className='mx-3 py-2 px-5 text-sm text-white bg-orange-600 rounded-lg cursor-pointer'
                onClick={handleClick}
            >
                {name}
            </p>
        </div>
    )
}

export default FooterComp