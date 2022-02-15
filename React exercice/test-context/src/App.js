import { Mycontext } from './component/Mycontext';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Profile from './component/Profile';

class App extends Component {

  state ={
    user:{
      name:'Lisa',
      age: 8
    }
  }

  render(){

    
    return (
      <Mycontext.Provider value={this.state.user}>

        <Profile info={this.state.user}/>

      </Mycontext.Provider>
    );

  }
}

export default App;
