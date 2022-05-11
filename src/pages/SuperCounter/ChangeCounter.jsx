import React from 'react'

function ChangeCounter(props){

  function increase(){
    props.changeState((state)=> ({
      ...state,
      count: state.count + state.step,
    }))
  }

  function decrease(){
    props.changeState((state)=> ({
      ...state,
      count: state.count - state.step,
    }))
  }
 
  function switchMode(){
    props.changeState((state)=>({
      ...state,
      isIncrease: !state.isIncrease
    }))
  }

    return(
      <div>
        <button
          onClick={props.isIncrease ? increase : decrease}
        >
          {props.isIncrease ? 'Добавить' : 'Отнять'}
        </button>

        <button onClick={switchMode}>Переключить режим</button>
      </div>
    )
  }

  export default ChangeCounter
