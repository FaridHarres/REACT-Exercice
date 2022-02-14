import './App.css';
import { Component } from 'react';
import Vegeta from './Vegeta';
import Goku from './Goku';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddHits from './AddHits';


class App extends Component {

  render(){

    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <hr/>
        <div className="row">
          <AddHits
          render={
            (hits, addone, sayan)=>(
              sayan.vegeta &&<Vegeta hits={hits} addone={addone} name="Vegeta"/>
            )
          }
          />
           <AddHits
          render={
            (hits, addone, sayan)=>(
              sayan.goku && <Goku hits={hits} addone={addone} name="Goku"/>
            )
          }
          />
        </div>       
      </div>
    );
  }
}

export default App;
