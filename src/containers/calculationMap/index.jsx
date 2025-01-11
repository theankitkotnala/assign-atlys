import React, { useEffect } from "react";
import backgroundDotImg from '@assets/images/back.svg'
import { EquationCard, EquationInOutChip } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { setFunctions } from "@redux/actions";
import { getAllFunctions } from "@utils/helper";

/**
 * This is the container for the Chaining calculation
 */
const CalculationMap = () => {
    const dispatch = useDispatch()
    const { functions } = useSelector(state => state.calculationMap)

    useEffect(() => {
        // set all functions
        dispatch(setFunctions(getAllFunctions()))
    }, [])

    return <div className="bg-stone-50 h-dvh flex justify-center items-center" style={{ backgroundImage: `url(${backgroundDotImg})`}}>
        <section className="flex w-full flex-wrap gap-16 justify-center items-center">
            <EquationInOutChip input={true} />
            <EquationCard functionBody={functions[1]}/>
            <EquationCard functionBody={functions[2]}/>
            <EquationCard functionBody={functions[3]}/>
            <EquationCard functionBody={functions[4]}/>
            <EquationCard functionBody={functions[5]}/>
            <EquationInOutChip input={false}/>
        </section>
        
    </div>;
};

export default CalculationMap;
