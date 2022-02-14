import './App.css';
import { Component } from 'react';
import Vegeta from './Vegeta';
import Goku from './Goku';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       vegeta : 100,
       goku : 100
    }
  }


  //param2 est la puissance
  reduceLife=(param, param2)=>{
    if(param==='Goku'){
      this.setState({
        vegeta: this.state.vegeta - param2
      })
    }else{
      this.setState({
        goku: this.state.goku - param2
      })

    }
  }

  render(){

    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <hr/>
        <div className="row">
          <Vegeta name="vegeta" life={this.state.vegeta} reduceHandler={this.reduceLife}/>
          <Goku name="goku" life={this.state.goku}  reduceHandler={this.reduceLife}/>

        </div>
  
       
      </div>
    );
  }
}

export default App;
