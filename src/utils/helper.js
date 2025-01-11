import {
    function_1,
    function_2,
    function_3,
    function_4,
    function_5
} from './constants'

export const getAllFunctions = () => {
    return {
        1: function_1,
        2: function_2,
        3: function_3,
        4: function_4,
        5: function_5
    }
}

export const equationResolver = (equation, input) => {
    try {
         // Replace 'x' with the value and '^' with '**' for exponentiation
        const equationWithX = equation.replace(/x/g, `*${input}`).replace(/\^/g, '**');
        return eval(equationWithX);
    } catch (e) {
        return 'NA';
    }
}