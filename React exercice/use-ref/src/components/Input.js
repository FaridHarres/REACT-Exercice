import { useRef, useState, useEffect } from 'react';

function Input() {

    const [count, setCount] = useState(0)

    //on declare le use ref pour pouvoir utiliser par la suite le return de  prevCount +1
    const setIntervalRef = useRef()


    useEffect(() => {
        
        setIntervalRef.current = setInterval(()=>{
            setCount((prevCount)=>{
                return prevCount +1
            })
        },1000)
        
        
    }, [])
    

    const stopIncre =()=>{
        clearInterval(setIntervalRef.current)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={stopIncre}>stop</button>
    </div>
  )
}

export default Input