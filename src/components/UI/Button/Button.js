import React from 'react';
import classes from './Button.module.css';

const Button = (prop) => {
  const clickHandler = () => {
    console.log('click')
  }
  return (
    <button type='button' className={classes.button} onClick={clickHandler}>
      Click Here
    </button>
  );
};

export default Button;
