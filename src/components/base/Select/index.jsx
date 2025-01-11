import React from 'react';
import ArrowDown from '@assets/icons/ic-arrow-down.svg';

const Select = ({ title, value, options, ...props }) => {
    return <div>
        {title && <span className='text-xs font-medium text-[#252525]'>{title}</span>}
        <div className='border border-solid border-[#D3D3D3] rounded-lg relative'>
            <select
                {...props}
                value={value}
                className='disabled:bg-[#F5F5F5] py-2 px-2 rounded-lg w-full text-xs font-medium text-[#252525] appearance-none'>
                {options.length > 0 ?
                    options.map((option, ind) => <option
                        value={option.value}
                        className='pr-2' key={`${option.value}_${ind}`}>
                        {option.text}
                    </option>)
                    : null}
            </select>
            <img src={ArrowDown} className='absolute bottom-1/2 right-2 translate-y-1/2'/>
        </div>
       
    </div>
}

export default Select;