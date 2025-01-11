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
    let simplifiedEquation = equation.split('').reduce((acc, curr, index, arr) => {
      if (index > 0 && curr === '(') {
        acc += '*'
      }
      acc += curr;
      if ((!Number.isNaN(curr) && arr[index + 1] === 'x')) {
        acc += '*'
      }
      return acc
    }, '')
    simplifiedEquation = simplifiedEquation.replace(/x/g, `${input}`).replace(/\^/g, '**');
    return eval(simplifiedEquation);
  } catch (e) {
    return 'NA';
  }
}