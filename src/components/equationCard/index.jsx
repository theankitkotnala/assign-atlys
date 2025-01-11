import React, { useEffect } from 'react';
import { Input, Select } from '@components/base';
import listDotIcon from '@assets/icons/ic-list_dots.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setFunctionBody, setCalcultorOutput } from '@redux/actions';
import { equationResolver } from '@utils/helper';

const EquationCard = (props) => {
    const { functionBody } = props
    const { functions } = useSelector(state => state.calculationMap)
    const dispatch = useDispatch()


    useEffect(() => {
        if (functionBody?.input && functionBody?.equation) {
            const output = String(equationResolver(functionBody?.equation, functionBody.input))
            if (output !== 'NA') {
                if (functionBody?.nextFunctionNumber) {
                    dispatch(setFunctionBody({
                        number: functionBody?.nextFunctionNumber,
                        body: {
                            ...functions[functionBody?.nextFunctionNumber],
                            input: output
                        }
                    }))
                } else {
                    dispatch(setCalcultorOutput(output))
                }
            } 
        }
       
    }, [functionBody?.input, functionBody?.equation])

    const onEquationChange = (e) => {
        const reg = /^[\d\+\-\*/\^x.\s]*$/;

        if (!e.target.value || reg.test(e.target.value)) {
            dispatch(setFunctionBody({
                number: functionBody.functionNumber,
                body: { ...functionBody, equation: e.target.value }
            }))
        }

    }

    return <div className='h-[251px] w-[235px] p-5 bg-white rounded-2xl border border-[#DFDFDF] border-solid drop-shadow-[0_0_6px_0_rgba(0,0,0,0.05)]'>
        <div className='flex items-center justify-start pb-2'>
            <img src={listDotIcon} className='mr-2' />
            <span className='text-[#A5A5A5] text-sm font-semibold'>Function: {functionBody?.functionNumber}</span>
        </div>
        <div className=''>
            <Input
                type="text"
                title="Equation"
                pattern="[A-Za-z0-9]"
                value={functionBody?.equation}
                onChange={onEquationChange}
            />
        </div>
        <div className='pt-2'>
            <Select
                title="Next function"
                value={functionBody?.nextFunctionNumber}
                disabled
                options={[
                    { text: 'Function: 1', value: 1 },
                    { text: 'Function: 2', value: 2 },
                    { text: 'Function: 3', value: 3 },
                    { text: 'Function: 4', value: 4 },
                    { text: 'Function: 5', value: 5 }
                ]}
            />
        </div>

    </div>
}

export default EquationCard;