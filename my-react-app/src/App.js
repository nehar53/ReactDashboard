
import Admin from './components/Admin'
import GraphContainer from './components/Graphcontainer'
import "./App.css";
import Sales from './components/Sales'


function App() {
  return (
    <div className="container-fluid">
     
      <Sales />
      <GraphContainer />
      <Admin />
    </div>

  );
}

export default App;
