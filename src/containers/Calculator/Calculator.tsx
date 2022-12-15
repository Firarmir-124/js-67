import React from 'react';
import { useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {Box, Paper} from "@mui/material";
import Keyboard from "../../components/Keyboard/Keyboard";

const Calculator = () => {
  const calculatorValue = useSelector((state:RootState) => state.calculator.value);

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
      <Paper elevation={10} sx={{width: '200px', mb: 2}}>
        <p>{calculatorValue}</p>
      </Paper>
      <Paper elevation={2} sx={{display: 'flex'}}>
        <Keyboard/>
      </Paper>
    </Box>
  );
};

export default Calculator;