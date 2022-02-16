import React, { useState, useEffect } from 'react'





function FunctionDisplayKey() {

    const [KeyCode, setKeyCode] = useState('')

    const handleKeyCode = (e)=>{
        setKeyCode(e.code)

    }

    useEffect(()=>{
        document.addEventListener("keyup", handleKeyCode)

        //affin d'eviter un componentWillUnmount pour eviter une fuite de memoir (afficher qqchose de nul) dans notre exemple la div est caché on peut directement mettre un return avec une fonctui fleché et levement a associé 
        return ()=>{
            document.removeEventListener("keyup", handleKeyCode)

        }
    },[])

    //ce use effect remplace componentDidMount et componentWillUnmount


    
    return (
        <div className='card'>
            <div className='card-body'>
                <h1 className='text-center'>{KeyCode}</h1>

            </div>

        </div>
    )
}

export default FunctionDisplayKey