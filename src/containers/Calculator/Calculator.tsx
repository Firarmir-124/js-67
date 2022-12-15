import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {Box, Button, ButtonGroup, Grid, Paper, Typography} from "@mui/material";
import './Calculator.css';

const NUMBERS = [
  {number: 7, value: '7'},
  {number: 8, value: '8'},
  {number: 9, value: '9'},
  {number: 4, value: '4'},
  {number: 5, value: '5'},
  {number: 6, value: '6'},
  {number: 1, value: '1'},
  {number: 2, value: '2'},
  {number: 3, value: '3'},
  {number: 0, value: '0'},
]

const Calculator = () => {
  const calculatorValue = useSelector((state:RootState) => state.calculator.value);

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
      <Paper elevation={10} sx={{width: '200px', mb: 2}}>
        <p>{calculatorValue}</p>
      </Paper>
      <Paper elevation={2} sx={{display: 'flex'}}>

        <Box sx={{width: '200px'}}>
          {NUMBERS.map(num => (
            <Button sx={{width: '50px', height: '50px', mb: '10px'}} variant="outlined">{num.value}</Button>
          ))}
        </Box>


        <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
          <Button sx={{width: '50px', height: '50px'}} variant="outlined">-</Button>
          <Button sx={{width: '50px', height: '50px'}} variant="outlined">+</Button>
          <Button sx={{width: '50px', height: '50px'}} variant="outlined">*</Button>
          <Button sx={{width: '50px', height: '50px'}} variant="outlined">/</Button>
          <Button sx={{width: '50px', height: '50px'}} variant="outlined">=</Button>
        </ButtonGroup>


      </Paper>
    </Box>
  );
};

export default Calculator;