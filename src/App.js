import './App.css';
import Activities from './component/Activities/Activities';
import data from './data.json'
import './css/style.css';

function App() {
  return (
    <Activities data={data} />
  );
}

export default App;
