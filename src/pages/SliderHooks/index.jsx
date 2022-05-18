import React, {useState} from 'react';
import AutoClick from './AutoClick';
import StepControl from './StepControl';

function SliderHooks () {
  const [count, setCount] = useState(0);
  const[step, setStep] = useState(1);

  const increase = () => {
    setCount(oldCount => oldCount + step)
  }

  const decrease = () => {
    setCount(oldCount => oldCount - step)
  }
  
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      Слайдер
    <div>
      <button onClick={()=>setTasks((tasks)=>{
        const newTasks = [...tasks, Math.random()];
        return newTasks;
      })
      }>Добавить таску</button>
      <div>Tasks: {tasks} </div>
    <div>{count}</div>
    <div>
      <button onClick={increase}>Следующий</button>
      <button onClick={decrease}>Предыдущий</button>
    </div>
    <div>
      <AutoClick action = {increase} />
      <StepControl 
        value={step} 
        onChange={(e)=> {
        const value = e.target.value;
        setStep(Number(value));
      }} />
    </div>
    </div>
    </div>
  )
}

export default SliderHooks