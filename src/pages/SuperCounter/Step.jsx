import React from 'react';
import PropTypes from 'prop-types';

function Step (props) {

  function onChange (e) {
    const value = e.target.value;
    props.changeState((state) => {
      return{
        ...state,
        step: Number(value),
      }
    })
  }

 
    return (
      <div>
      <input 
        type="text" 
        placeholder='Number for step' 
        name='step'
        onChange={onChange} 
        />
      <div>Шаг: {props.step}</div>
      </div>
    )
  }



  Step.defaultProps = {
    step: 1,
    changeState: () => {},
  } 

export default Step