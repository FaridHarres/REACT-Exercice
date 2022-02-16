import React, { Component } from 'react'

class ClassDisplayKey extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         KeyCode: null
      }
    }

    handleKeyCode =(e)=>{
        this.setState({
            KeyCode: e.code //lors du consol log on a pris le "code"
        })
    }
    
  componentDidMount() { 
      document.addEventListener("keyup", this.handleKeyCode)
   }

   componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyCode)

    }
    
    render() {

    return (
      <div className='card'>
          <div className='card-body'>
              <h1 className='text-center'>{this.state.KeyCode}</h1>

          </div>

      </div>
    )
  }
}

export default ClassDisplayKey