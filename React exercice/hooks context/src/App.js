import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './component/Profile';
import { Mycontext, ColorContext } from './component/Mycontext';

class App extends Component {

  state ={
    user:{
      name:'Lisa',
      age: 8
    }
  }

  render(){

    
    return (
      <Mycontext.Provider value ={this.state.user}>
        <ColorContext.Provider value={'red'}>
          <Profile/>       
        </ColorContext.Provider>
      </Mycontext.Provider>
    );

  }
}

export default App;
