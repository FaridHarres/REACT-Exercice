import React, {useState, useRef, useLayoutEffect} from 'react'
import Content from './Content'
function Box() {

    const [height, setHeight] = useState(100)

    const boxStyle = {
        width: '400px',
        height:`${height}px`,
        margin: '0 auto',
        background: 'red'
    }

    const boxRef = useRef(null)


    useLayoutEffect(() => {
//pour acceder a la div en bas 

// console.log(boxRef.current.getBoundingClientRect())
        if(boxRef.current.getBoundingClientRect().height<150){
            setHeight(height + 100)
        }
      
    }, [height])

    
  return (
    <div ref={boxRef} style={boxStyle}>
        {`height ${height} px`}
        
        <Content/>
    </div>
  )
}

export default Box