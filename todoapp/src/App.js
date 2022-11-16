
import './App.css';
import Button from './component/Button';

function App() {
  
 
  return (
    <div className="App flex justify-center">

      <h1 className='bg-red-600 w-14 h-9  '>AnaSayfa</h1>
      <br /><br />

<Button text = "Tıkla" varriant = "warning"></Button>
<br />
<Button text = "Tıkla" varriant = "danger"></Button>

    </div>
  );
}

export default App;
