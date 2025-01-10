import React from "react";
import backgroundDotImg from './../../assets/images/back.svg'
import { EquationCard } from "../../components";

/**
 * This is the container for the Chaining calculation
 */
const CalculationMap = () => {
    return <div className="bg-stone-50 h-dvh flex justify-center items-center" style={{ backgroundImage: `url(${backgroundDotImg})`}}>
        <section className="map_wrap">
            <EquationCard/>
        </section>
        
    </div>;
};

export default CalculationMap;
