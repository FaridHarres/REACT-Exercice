import Profile from './components/Profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useMemo} from 'react';
import axios from 'axios';


function App() {

  const [count, setCount] = useState(1);


  //aller checher de la data il faut egalement installer axios
  //on constrruit le useState pour stocker les donné de la requete Axios
  const [profile, setprofile] = useState({})
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(response =>{
      // console.log(response)
      setprofile(response.data)
    })
    .catch(err=>{
      console.log(err)
    })
    
  
  },[count])//le use effect recharge indefiniment l'axios, on a donc mis dans le tableau de se recharger uniquement si on modifie le count
  

  //variable detat pour le changement de couleur
  const [dark, setDark] = useState(false)
  const goDark =()=>{
    setDark(!dark)
    if(!dark){
      document.body.classList.add("bg-secondary")
    }else{
      document.body.classList.remove("bg-secondary")

    }
  }

  const classBtnTheme= dark ? 'btn-light' : 'btn-dark'
  const Textbtn = dark? 'rendre clair' : 'rendre sombre'

  const memoizeValue = useMemo(()=>{
    return count>10
  }, [count]) //si le count change j'autorise usememo a refaire un calcule sinon ce nest pas la peine dans le cas precis, lorsuqon change de couleur du BG la fonction de qui constate si le count est inferieur a 10 ne sera pas appeler 

  

  return (
    <div className="container">
      <h1 className='text-center'>useMemo ()</h1>

      {memoizeValue && <div className='alert alert-danger' role="alert">STOP !!!</div>}
      
      <button className="btn btn-info mb-3" onClick={()=>setCount(count + 1)}>Increment : {count}</button>
      <button className={`btn ${classBtnTheme} mb-3 float-right`}
      onClick={goDark}>{Textbtn}</button>
    
      <Profile count={count} profile={profile}/>
    </div>
  );
}

export default App;
