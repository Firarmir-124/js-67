import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
    inputValue: (state, action:PayloadAction<string>) => {
      state.value += action.payload;
    },
    answer: (state) => {
      try {
        state.value = eval(state.value)
      }catch (e) {
        state.value = ''
      }
    },
    resetValue: (state) => {
      state.value = ''
    },
    removeValue: (state) => {
      state.value = state.value.slice(0, -1);
    }
  }
})

export const calculatorReducer = calculatorSlice.reducer;
export const {inputValue, answer, resetValue, removeValue} = calculatorSlice.actions;