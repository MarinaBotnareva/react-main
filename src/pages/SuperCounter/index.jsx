import React, { Component } from 'react';
import AutoClick from './AutoClick';
import ChangeCounter from "./ChangeCounter";
import Step from "./Step"

class SuperCounter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      isIncrease: true,
      step: 1,
      interval: 0
    }
  }

  componentWillUnmount(){
    clearInterval(this.this.timerID);
      this.this.timerID = null;
      this.setState((state) => ({
        ...state,
        interval: 0,
      }))
  }


  changeState = (callback) => {
    this.setState(callback)
  }

  render() {
    const { count, isIncrease, step, interval } = this.state;

    return (
      <div>
        <div>Счет: {count} </div>
        <section></section>
        <ChangeCounter 
        isIncrease={isIncrease}
        changeState={this.changeState}
        step = {step}
        />

        <Step 
        changeState={this.changeState}
        step = {step}/>

      <AutoClick 
      isIncrease={isIncrease}
        changeState={this.changeState}
        interval = {interval}
      />
      </div>
    )
  }

}

export default SuperCounter