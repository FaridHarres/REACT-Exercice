import React, { Component } from 'react'

export class ClassCount extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }


    //se charge une fois au moment du montag du composant
    componentDidMount() { 
        document.title =`vous avez cliqué ${this.state.count} fois`
     }

    //se charge a chaque changement de props ou state
    componentDidUpdate(prevProps, prevState) { 
        document.title =`vous avez cliqué ${this.state.count} fois`

    } 

  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={()=>this.setState({count : this.state.count +1})}>Cliquer</button>
      </div>
    )
  }
}

export default ClassCount