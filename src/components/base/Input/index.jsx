import React from 'react';

const Input = ({ title, ...props }) => {
    return <div>
        {title && <span className='text-xs font-medium text-[#252525]'>{title}</span>}
        <input 
            {...props} 
            className='border border-solid border-[#D3D3D3] rounded-lg py-2 px-2 mt-1 w-full text-xs font-medium text-[#252525] focus:outline-none'/>
    </div>
}

export default Input;