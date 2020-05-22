import React from 'react'

const validate = (props) => {

  const inputValidation = () => {
    let value = ''
    if (props.inputLength > 5) {
      value = 'Too long';
    }
    if (props.inputLength < 2) {
      value = 'Too short';
    }
    return value
  }
  console.log(props)
  return (
    <div>
      <p>Props: {props.inputLength} {inputValidation()}</p>
    </div>
  );
}


export default validate;