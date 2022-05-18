import React, {useEffect, useState} from 'react';

function AutoClick (props) {
  const [isDidMount, setDidMount] = useState(true);
  const [timerId, setTimerId] = useState(null);

  const startAuto = () => {
    if (timerId === null) {
      const id = setInterval(props.action, 1000);
      setTimerId(id); 
    }
  }

  const stopAuto = () => {
    clearInterval(timerId);
    setTimerId(null);
  }

  //didmount + didupdate
  useEffect(()=>{
    document.title = `Автокликер ${timerId === null ? 'остановлен' : 'запущен'}`
  })

  //didmount
  useEffect(() => {
    console.log('mount 1')
    startAuto();

    return () => {
      console.log('unmount 1')
      stopAuto();
    }
  }, [])

  //didmount + didupdate
  useEffect(() => {
    if(isDidMount) {
      console.log('mount');
      setDidMount(false);
    }else{
      console.log('didupdate')
    }
  }, [timerId])

  console.log('render');

  return (
    <div>
      <button onClick={startAuto}>Старт</button>
      <button onClick={stopAuto}>Стоп</button>
    </div>
  )
}

export default AutoClick