import { 
    SET_CALCULATOR_INPUT, 
    SET_CALCULATOR_OUTPUT, 
    SET_FUNCTIONS, 
    SET_FUNCTION_BODY 
} from "../actionTypes/calculationMap";

const initialState = {
  functions: {},
  inputVal: '',
  outputVal: ''
};

const calculationMapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CALCULATOR_INPUT:
        return { ...state, inputVal: action.data || '' }
    case SET_CALCULATOR_OUTPUT:
        return { ...state, outputVal: action.data || '' }
    case SET_FUNCTIONS:
        return { ...state, functions: action.data || {} }
    case SET_FUNCTION_BODY:
        return {
            ...state,
            functions: {
                ...state.functions,
                [action.data.number]: action.data.body
            }
        }
    default:
      return state;
  }
};

export default calculationMapReducer;
