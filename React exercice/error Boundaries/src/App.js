import './App.css';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';
import Frieza from './components/Frieza';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/ErrorBoundary';



function App() {
  return (
    <div className="container text-center">
      <h1>Cliquez sur les gentils</h1>

      <div className="row">
        <ErrorBoundary>
          <Vegeta/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Goku/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Frieza/>
        </ErrorBoundary>
      </div>
      
    </div>
  );
}

export default App;
