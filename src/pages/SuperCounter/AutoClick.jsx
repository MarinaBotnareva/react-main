import React, {Component} from "react";

class AutoClick extends Component {


  plus = () => {
    this.props.changeState((state) => ({
      ...state,
      count: state.count + 1,
      interval: state.interval+1
    }))
  }

  minus = () => {
    this.props.changeState((state) => ({
      ...state,
      count: state.count - 1,
      interval: state.interval+1
    }))
  }
  
  timer = () => {
  
   if (this.timerID === undefined || this.timerID === null){
    setTimeout(()=>{clearInterval(this.timerID);
      this.timerID = null;}, 31000);  
    this.props.isIncreace === false ? 
      this.timerID = setInterval(
        () => this.plus(),
        1000)
    : this.timerID = setInterval(
     () => this.minus(),
     1000
   )  
  }
    else {
      clearInterval(this.timerID);
      this.timerID = null;
      this.props.changeState((state) => ({
        ...state,
        interval: 0,
      }))
    }
  }
render(){ 
  console.log(this.props)
return(
  <button onClick={this.timer}>AutoClick {this.props.interval}</button>
)
}
}

export default AutoClick