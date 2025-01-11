import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCalcultorInput, setCalcultorOutput, setFunctionBody } from '@redux/actions';

const EquationInOutChip = ({ input = true, ...props }) => {
    const dispatch = useDispatch()
    const { inputVal, outputVal, functions } = useSelector(state => state.calculationMap)

    const onInputValueChange = (e) => {
        const reg = /^\d+$/;
        if (!e.target.value || reg.test(e.target.value)) {
            dispatch(setCalcultorInput((e.target.value)))
            dispatch(setFunctionBody({
                number: 1,
                body: {
                    ...functions[1],
                    input: e.target.value
                }
            }))

            if (!e.target.value) {
                dispatch(setCalcultorOutput(''))
            }
        }
    }

    const _renderTitleChip = () => {
        const bgColor = input ? 'bg-[#E29A2D]' : 'bg-[#4CAF79]'
        return <div className={`mb-1 px-2 py-1 rounded-[14px] text-center border-none ${bgColor} font-semibold text-sm text-white text-xs font-semibold`}>
            {input ? 'Initial value of x' : 'Final Output y'}
        </div>
    }

    const _renderContent = () => {
        if (input) {
            return <>
                <div className='pl-2 py-2 flex-2'>
                    <input
                        type="text"
                        maxLength={4}
                        value={inputVal}
                        className='focus:outline-none px-1 w-[100%] font-bold text-lg'
                        onChange={onInputValueChange}
                    />
                </div>
                <div className='px-3 py-2 border-l border-l-solid border-l-[#FFEED5] flex-auto'>
                    <div></div>
                </div>
            </>
        } else {
            return <> 
            <div className='px-3 py-2 flex-auto'>
                <div></div>
            </div>
            <div className='px-3 py-2 flex-2 border-l border-l-solid border-l-[#C5F2DA]'>
                <span className='px-1 w-[100%] font-bold text-lg'>{outputVal}</span>
            </div>
        </>
        }
    }
    const chipBorder = input ? 'border-[#FFC267]' : 'border-[#2DD179]'
    return <div className='w-[115px]'>
        {_renderTitleChip()}
        <div className={`flex border-[2px] border-solid ${chipBorder} rounded-lg bg-white h-[48px]`}>
        {_renderContent()}
        </div>
    </div>
}

export default EquationInOutChip;