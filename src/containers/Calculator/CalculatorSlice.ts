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
  reducers: {}
})

export const calculatorReducer = calculatorSlice.reducer;