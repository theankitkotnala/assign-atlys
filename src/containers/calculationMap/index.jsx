import React, { useEffect } from "react";
import backgroundDotImg from '@assets/images/back.svg'
import { EquationCard, EquationInOutChip } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { setFunctions } from "@redux/actions";
import { getAllFunctions } from "@utils/helper";
import line2Icon from '@assets/icons/line-2.svg';
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

    return <div className="bg-stone-50  flex justify-center items-center py-12" style={{ backgroundImage: `url(${backgroundDotImg})` }}>
        <section className="relative flex flex-col gap-[108px]">
            <div className="flex justify-center items-center gap-[128px]">
                <EquationCard functionBody={functions[1]} />
                <EquationCard functionBody={functions[2]} />
                <EquationCard functionBody={functions[3]} />
            </div>
            <div className="flex justify-center items-center gap-[124px]">
                <EquationCard functionBody={functions[4]} />
                <EquationCard functionBody={functions[5]} />
            </div>
            <img src={line2Icon} className="absolute top-[223px] left-[206px]" width={188}/>
            <img src={line3Icon} className="absolute top-[223px] left-[210px]"/>
            <img src={line5Icon} className="absolute top-[223px] right-[162px] rotate-3"/>
            <img src={line2Icon} className="absolute bottom-[-18px] left-[390px]" width={184}/>
        </section>
    </div>;
};

export default CalculationMap;
