import {createSlice} from "@reduxjs/toolkit";

interface CalculatorState {
  value: string;
}

const initialState: CalculatorState = {
  value: ''
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    inputValue: (state, action) => {
      state.value += action.payload;
    },
    answer: (state) => {
      state.value = eval(state.value)
    }
  }
})

export const calculatorReducer = calculatorSlice.reducer;
export const {inputValue, answer} = calculatorSlice.actions;