import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {includes, compact} from 'lodash'

function calculateResponse(inputString:string, comparisonString:string):string{
    let response = 'no coincide';
    let lengthInput = comparisonString.split("").length;
    let responsesList = [];
    for (const letter of comparisonString.split("")){
        responsesList.push(includes(inputString.split("") as Array<string>,letter));
    }
    if (compact(responsesList).length >=lengthInput){
        response = 'coincide'
    } else {
        response = 'no coincide'
    }
    return response

}

export interface AutomataState {
  inputString:string,
  comparisonString:string,
  loading:boolean,
  response:string
}

export const initialState: AutomataState = {
 inputString: 'resta',
 comparisonString: 'satre',
 loading:false,
 response:''
};

const automataSlice = createSlice({
  name: 'automata',
  initialState,
  reducers: {
    setStrings(state, action: PayloadAction<{inputString:string, comparisonString:string}>) {
      const {inputString, comparisonString} = action.payload;
      state.inputString = inputString;
      state.comparisonString = comparisonString;
    },
    calculateStrings(state) {
     console.log("🚀 ~ file: reducer.ts ~ line 25 ~ calculateStrings ~ state", state)
     const {inputString, comparisonString} = state;
     state.response = calculateResponse(inputString, comparisonString);

    },
  },
});

export const { setStrings, calculateStrings } = automataSlice.actions;
const automataReducer = automataSlice.reducer;
export default automataReducer;
