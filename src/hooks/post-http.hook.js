import {useReducer} from 'react';

const inputReducer = (state, action) => {
  console.log('input reducer error is here?');
  switch (action.type) {
    case 'ON_CHANGE': {
      console.log('inside of the ttype switch?');
      return {inputValue: action.value, isTouched: false};
    }
    case 'ON_BLUR':
      return {inputValue: state.inputValue, isTouched: true};
    case 'RESET':
      return {inputValue: '', isTouched: false};
    default:
      throw new Error('Action type not available! ', action.type);
  }
};

const useHttp = (validateInputFunc) => {
  const [input, dispatchInput] = useReducer(inputReducer, {
    inputValue: '',
    isTouched: false,
  });

  const enteredInputIsValid = validateInputFunc(input.inputValue);
  const inputFieldIsInvalid = !enteredInputIsValid && input.isTouched;

  const handleOnChange = (event) => {
    console.log('handle on change error is here?');
    dispatchInput({type: 'ON_CHANGE', value: event.target.value});
  };

  const handleOnBlur = () => {
    dispatchInput({type: 'ON_BLUR'});
  };

  const resetInput = () => {
    dispatchInput({type: 'RESET'});
  };

  return {
    input,
    enteredInputIsValid,
    inputFieldIsInvalid,
    handleOnChange,
    handleOnBlur,
    resetInput,
  };
};

export default useHttp;
