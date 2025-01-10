import React from 'react';
import {Input , Select } from '@components/base';
import listDotIcon from './../../assets/icons/ic-list_dots.svg';

const EquationCard = () => {



    return <div className='h-[251px] w-[235px] p-5 bg-white rounded-2xl border border-[#DFDFDF] border-solid drop-shadow-[0_0_6px_0_rgba(0,0,0,0.05)]'>
        <div className='flex items-center justify-start pb-2'>
            <img src={listDotIcon} className='mr-2'/>
            <span className='text-[#A5A5A5] text-sm font-semibold'>Function: 1</span>
        </div>
        <div className=''>
            <Input 
                type="text"
                title="Equation"
                pattern="[A-Za-z0-9]"
                />
        </div>
        <div className='pt-1'>
            <Select 
                title="Equation"
                value="function_2"
                disabled
                options={[
                    {text: 'Function: 1', value: 'function_1'},
                    {text: 'Function: 2', value: 'function_2'},
                    {text: 'Function: 3', value: 'function_3'},
                    {text: 'Function: 4', value: 'function_4'},
                    {text: 'Function: 5', value: 'function_5'}
                ]}
                />
        </div>
      
    </div>
}

export default EquationCard;