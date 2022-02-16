import React from 'react'



//children ici est = count1 dans App.js
function Button({handleClick, btnColor, increment, children}) {
  return (
    <button onClick={()=>handleClick(increment)} className={`btn btn-${btnColor}`}>+{increment} %</button>
  )
}

export default React.memo(Button)