

function StepControl(props){
  return(
    <div>
      <input type="text" placeholder="Step" value={props.value} onChange={props.onChange}/>
    </div>
  )
}

export default StepControl