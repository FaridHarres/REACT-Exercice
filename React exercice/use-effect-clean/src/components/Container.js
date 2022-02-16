import React, {useState} from 'react'
import FunctionDisplayKey from './FunctionDisplayKey'


function Container() {

    const [show, setShow] = useState(true)
    //si dans le state on a true on va cacher le composant
    const btnDisplay = show? 'cacher' :'afficher'
  return (
    <div className='text-center'>

        <button className='btn btn-primary m-3' onClick={()=>setShow(!show)}> {btnDisplay} </button>
        
        {
            show && <FunctionDisplayKey />
        }
    </div>
  )
}

export default Container