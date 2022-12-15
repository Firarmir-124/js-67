import React from 'react';
import {Box, Button, ButtonGroup, Paper} from "@mui/material";
import {answer, inputValue, removeValue, resetValue} from "../Calculator/CalculatorSlice";
import {useDispatch} from "react-redux";

const NUMBERS = [
  {value: '7'},
  {value: '8'},
  {value: '9'},
  {value: '4'},
  {value: '5'},
  {value: '6'},
  {value: '1'},
  {value: '2'},
  {value: '3'},
  {value: '0'},
]

const Keyboard = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{width: '200px'}}>
        {NUMBERS.map(num => (
          <Button
            onClick={() => dispatch(inputValue(num.value))}
            sx={{width: '50px', height: '50px'}}
            variant="outlined"
          >
            {num.value}
          </Button>
        ))}

        <Button
          onClick={() => dispatch(resetValue())}
          sx={{width: '50px', height: '50px'}}
          variant="outlined"
        >
          C
        </Button>
        <Button
          onClick={() => dispatch(removeValue())}
          sx={{width: '50px', height: '50px'}}
          variant="outlined"
        >
          #
        </Button>
      </Box>




      <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
        <Button
          onClick={() => dispatch(inputValue('-'))}
          sx={{width: '50px', height: '50px'}}
          variant="outlined"
        >
          -
        </Button>
        <Button
          onClick={() => dispatch(inputValue('+'))}
          sx={{width: '50px', height: '50px'}}
          variant="outlined"
        >
          +
        </Button>
        <Button
          onClick={() => dispatch(inputValue('*'))}
          sx={{width: '50px', height: '50px'}}
          variant="outlined"
        >
          *
        </Button>
        <Button
          onClick={() => dispatch(answer())}
          sx={{width: '50px', height: '50px'}}
          variant="outlined"
        >
          =
        </Button>
        <Button
          onClick={() => dispatch(inputValue('/'))}
          sx={{width: '50px', height: '50px'}}
          variant="outlined"
        >
          /
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Keyboard;