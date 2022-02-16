import React, {useState, useEffect} from 'react'

function FunctionCount() {

   const [count, setCount] = useState(0)

   useEffect(()=>{

    // setTimeout(()=>{
        
        document.title = `vous avez cliqué ${count} fois`
    // },5000)
   })
   //avec useEffect  nous avons pu creer une methode qui regroupe le  componentDidMount() componentDidUpdate. 

  return (
    <div>
        <h1>{count}</h1>

        <button onClick={()=>setCount(count + 1)}>cliquer </button>
    </div>
  )
}

export default FunctionCount