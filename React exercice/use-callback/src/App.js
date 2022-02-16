import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import './App.css';

import Count from './components/Count';
import { useState, useCallback } from 'react';


function App() {

  const [countOne, setcountOne] = useState({value: 0, btnColor: 'success', increment: 25})
  const [countTwo, setcountTwo] = useState({value: 0, btnColor: 'danger', increment: 20})
  

  //afin d'eviter le rechargement inutile de fonction que nous n'avons pas utiliser 
  //si j'apporte une modif au countOne tu peux proceder au retour dune nouvelle fonction
  const incrementCountOne = useCallback((val) =>{
    countOne.value < 100 && setcountOne({...countOne, value: countOne.value + val},[countOne])
  })
  
  
  const incrementCountTwo = useCallback((val) =>{
    countTwo.value < 100 && setcountTwo({...countTwo, value: countTwo.value + val})
  }, [countTwo])
  


  return (
    <div className="container">

      <Count count={countOne.value} bgColor={countOne.btnColor}/>
      <Count count={countTwo.value} bgColor={countTwo.btnColor}/>
      
      <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Button>
      <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button>
    </div>
  );
}

export default App;
