import React, { useEffect } from 'react';
import { Input, Select } from '@components/base';
import { ConnectorDot } from '@components';
import listDotIcon from '@assets/icons/ic-list_dots.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setFunctionBody, setCalcultorOutput } from '@redux/actions';
import { equationResolver } from '@utils/helper';
import EquationInOutChip from '../equationInOutChip';

const EquationCard = (props) => {
    const { functionBody } = props
    const { functions } = useSelector(state => state.calculationMap)
    const dispatch = useDispatch()


    useEffect(() => {
        if (functionBody?.input && functionBody?.equation) {
            const output = String(equationResolver(functionBody?.equation, functionBody.input))
            if (output) {
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

    return <div className='relative h-[251px] w-[235px] p-4 bg-white rounded-2xl border border-[#DFDFDF] border-solid drop-shadow-[0_0_6px_0_rgba(0,0,0,0.05)]'>
        {functionBody?.functionNumber === 1 && <div className='absolute bottom-0 left-[-127px]'>
            <EquationInOutChip input={true} />
        </div>}
        {functionBody?.nextFunctionNumber === null && <div className='absolute bottom-0 right-[-126px]'>
            <EquationInOutChip input={false} />
        </div>}
        <div className='flex items-center justify-start pb-2'>
            <img src={listDotIcon} className='mr-2' />
            <span className='text-[#A5A5A5] text-sm font-semibold'>Function: {functionBody?.functionNumber}</span>
        </div>
        <div className='flex flex-col justify-between items-center'>
            <div className='flex flex-col'>
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

            <div className='flex justify-between items-center absolute w-[195px] bottom-[17px]'>
                <div className='flex items-end justify-center'>
                    <ConnectorDot/>
                    <span className='ml-2 text-xs font-medium text-[#585757]'>input</span>
                </div>
                <div className='flex items-end justify-center'>
                    <span className='mr-2 text-xs font-medium text-[#585757]'>output</span>
                    <ConnectorDot/>
                </div>
            </div>
        </div>
    </div>
}

export default EquationCard;