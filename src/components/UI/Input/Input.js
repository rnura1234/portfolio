import React, { useState } from 'react';

import classes from './Input.module.css';

function Input() {
  const [inputValue, setInputValue] = useState('');
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={classes['input_control']}>
      <label className={classes.label} htmlFor='id'>
        Name
        <span className={classes['input_required']} title='Required'>
          *
        </span>
      </label>
      <input
        type='text'
        id='name'
        name='name'
        value={inputValue}
        onChange={(e) => inputChangeHandler(e)}
        placeholder='Enter Input'
        className={classes.input}
      />
    </div>
  );
}

export default Input;
