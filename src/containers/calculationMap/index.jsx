import React, { useEffect } from "react";
import backgroundDotImg from '@assets/images/back.svg'
import { EquationCard, EquationInOutChip } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { setFunctions } from "@redux/actions";
import { getAllFunctions } from "@utils/helper";
import line3Icon from '@assets/icons/line-3.svg';
import line5Icon from '@assets/icons/line-5.svg';

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

    return <div className="bg-stone-50 h-dvh flex justify-center items-center" style={{ backgroundImage: `url(${backgroundDotImg})` }}>
        <section className="relative flex flex-col gap-16">
            <div className="flex justify-center items-center gap-16">
                <EquationCard functionBody={functions[1]} />
                <EquationCard functionBody={functions[2]} />
                <EquationCard functionBody={functions[3]} />
            </div>
            <div className="flex justify-center items-center gap-12">
                <EquationCard functionBody={functions[4]} />
                <EquationCard functionBody={functions[5]} />
            </div>
            <img src={line3Icon} className="absolute top-[223px] left-[186px]" width={320}/>
            <img src={line5Icon} className="absolute top-[223px] right-[156px]" width={50}/>
        </section>
    </div>;
};

export default CalculationMap;
