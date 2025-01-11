
import {
    SET_CALCULATOR_INPUT,
    SET_FUNCTIONS,
    SET_FUNCTION_BODY,
    SET_CALCULATOR_OUTPUT
 } from "../actionTypes/calculationMap";
 
 export const setCalcultorInput = (data) => {
   return {
     type: SET_CALCULATOR_INPUT,
     data,
   }
 }
 
 export const setFunctions = (data) => {
   return {
     type: SET_FUNCTIONS,
     data,
   };
 };
 
 export const setFunctionBody = (data) => {
   return {
     type: SET_FUNCTION_BODY,
     data,
   };
 };
 
 export const setCalcultorOutput = (data) => {
   return {
     type: SET_CALCULATOR_OUTPUT,
     data,
   };
 };