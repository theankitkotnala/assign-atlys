import React from 'react';

const Select = ({ title, value, options, ...props }) => {
    return <div>
        {title && <span className='text-xs font-medium text-[#252525]'>{title}</span>}
        <select
            {...props}
            value={value}
            className='disabled:bg-[#F5F5F5] border border-solid border-[#D3D3D3] rounded-lg py-2 px-2 mt-1 w-full text-xs font-medium text-[#252525]'>
            {options.length > 0 ?
                options.map(option => <option value={option.value} className='pr-2'>{option.text}</option>)
                : null}
        </select>
    </div>
}

export default Select;