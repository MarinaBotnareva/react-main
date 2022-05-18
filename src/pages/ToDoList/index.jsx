import React, { useState, useEffect, useCallback} from 'react';
import './style.sass'
function ToDoList (){
  const [todoValue, setTodoValue] = useState('')
  const [tasksArr, setTasksArr] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        text: userInput,
        complete: false 
      }
      setTasksArr([...tasksArr, newItem])
    }
  };

  const saveToLocalStorage = useCallback(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
  }, [tasksArr]);

  useEffect(() => {
    saveToLocalStorage();
  }, [saveToLocalStorage]);


  const onSubmit = (e) => {
    e.preventDefault();
    addTask(todoValue);
    setTodoValue('');
  }

  const removeTask = (id) => {
    setTasksArr((oldTasks) => {
      const newTasks = oldTasks.filter((t)=> t.id !== id);
      return newTasks;
    })
  }

  const onInputChange = ({target: {value}}) => {
    // e.target.value === { target: {value}}
    setTodoValue(value);
  }
  
  return (
    <div className='todo'>
      <h2>ToDo List: {tasksArr.length}</h2>
      <div>
      <form onSubmit={onSubmit} >
        <input className='input' type='text' value={todoValue} onChange={onInputChange} />
        <button className='button1' type='submit'>Add</button>
      </form>
      <ul>{tasksArr.map((task) => {
        return <li className='tasks'
          key={task.id}>{task.text}
        <button className='button' onClick={() => removeTask(task.id)} style={{color: 'green'}}>
        <svg
                  width='24'
                  height='24'
                  style={{ color: 'white' }}

                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z'
                  />
                </svg>
        </button>
        </li>
      } )}</ul>
      </div>
    </div>
  )
}

export default ToDoList