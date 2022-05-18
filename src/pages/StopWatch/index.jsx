import React, {useEffect, useState} from 'react';

function StopWatch(){
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

    
    // const hours = Math.floor(time / 3600);
    // const minutes = Math.floor((time - hours * 3600) / 60);
    // const seconds = time - minutes * 60 - hours * 3600;

    const minutes = Math.floor((time / 60000))
    const seconds = Math.floor((time - minutes*60000) / 100);
    const milli = (time - minutes*60000 - seconds*100)*10; 



  function tick() {
    setTime(oldTime => oldTime + 1) 
  }

  function start() {
    if (timerId === null) {
      const id = setInterval(tick, 10);
      setTimerId(id); 
    } else {
      clearInterval(timerId);
      setTimerId(null);
    }
  }
  

  function stop() {
    clearInterval(timerId);
    setTimerId(null);
    setTime(0);
  }

  function resetAndStart() {
    clearInterval(timerId);
    setTimerId(null);
    setTime(0);
    const id = setInterval(tick, 10);
    setTimerId(id);

  }

  useEffect(() => {
    start();

    return () => {
      stop();
    }
  }, [])

  return (
    <div>
      <div>{minutes}:{seconds}:{milli}</div>
      <div>
        <button onClick={start}>Старт/Пауза</button>
        <button onClick={resetAndStart}>Сброс</button>
        <button onClick={stop}>Стоп</button>
      </div>
    </div>
  )


}

export default StopWatch