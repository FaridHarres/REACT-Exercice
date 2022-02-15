import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Docs from './component/Docs';
import Tutorial from './component/Tutorials';
import Community from './component/Community';
import Menu from './component/Menu';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Error from './component/Error';
import React from 'react'



class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       underConst:{
         Docs: false,
         Tutorial: true,
         Community: false,
       }
    }
  }

  render(){

    return (
      <BrowserRouter >
        <Menu />
  
        <Switch>
  
          <Route exact path="/" component={Docs} />
          <Route path="/Tutorial" component={Tutorial} />
          
          <Route strict path="/Community" component={Community} />
          <Route  component={Error} />
  
        </Switch>
  
       
  
      </BrowserRouter>
    );
  }
}

export default App;
