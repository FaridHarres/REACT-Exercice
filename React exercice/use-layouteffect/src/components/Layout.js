import React,{useState, useEffect, useLayoutEffect} from 'react'

function Layout() {
    const [count, setCount] = useState(0)

    useEffect(() => {
      //effet
      console.log('je suis dans useEffect')
    
    }, [count])


    useLayoutEffect(() => {
        //effet
        console.log('je suis dans useLayoutEffect')
      
      }, [count])
    console.log("Render")
    
    
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count +1)}>+1</button>
    </div>
  )
}

export default Layout