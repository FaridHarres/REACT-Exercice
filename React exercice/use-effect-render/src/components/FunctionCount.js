import React, {useState, useEffect} from 'react'

function FunctionCount() {

   const [count, setCount] = useState(0)

   const [name, setName] = useState ('')

   useEffect(()=>{

    // setTimeout(()=>{
        console.log("mise a jour du titre via useEffect")
        document.title = `vous avez cliqué ${count} fois`
    // },5000)
   },[count])//dans le tableau nous devons mettre uniquement a partir de quand nous voulons que le use effect se charge. dasn ce ca precis nous voulons que ce useeffect fasse effet que quand nous changeons le count
   //avec useEffect  nous avons pu creer une methode qui regroupe le  componentDidMount() componentDidUpdate. 



  return (
    <div>
        <h1>{count}</h1>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <button onClick={()=>setCount(count + 1)}>cliquer </button>
    </div>
  )
}

export default FunctionCount