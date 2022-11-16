import './App.css';
import Mybutton from './components/atom/mybutton';
import Mylsbutton from './components/atom/mylsbutton';
import React from 'react'

function App() {

  const [state , setState] = React.useState(0);

  const onClick = ()=>{
    setState(state+2);
  }

  // const onClick1 = ()=>{
  //   console.log("app clicked");
  // }


  /**
   * useEffect -> constructor gibi bir kullanıma sahiptir. 
   * constructor kullanımı -> [] boş bir array vererek çalıştırabiliriz.
   */

   React.useEffect(()=>{
    console.log("useEffect çalıştı")

    /**
     * sayfadan ayrıldığında, ya da bileşen kapatıldığında yapılması istenilen işlemler için return kullanılır.
     * 
     * Senaryolar -> 
     * 1- Bir sunucuya istek atıldığında bu istek devam ederken bileşen kapatıldığında asenkron işlem olduğu için
     * iptal edilmediğinden bellek sızıntısına yol açar
     * 
     */

    return ()=> {
      console.log("useeffect return çalıştı");
    }
  }, [])

  React.useEffect(()=>{
    console.log("useEffect count çalıştı")
  }, [state])

  console.log("App rendering")
  return (
    <div className="App">
      <h1>Buttton İşlemleri, MyButton</h1>
      <br /><br />
      <button onClick={onClick}>App Button</button>
      <p>sayı: {state}</p>
      <br />
      <br />
      <br /><br />
      <Mybutton bubenimtanimim = "1.Button"  onClick = {onClick} />
      <br /><br />
      <Mybutton bubenimtanimim = "Ya bu işler ne"  onClick = {onClick} ></Mybutton>

      <br />
      <Mylsbutton buttonType = "primary" buttonText = "Primary Button"></Mylsbutton>
      <br /><br />
      <Mylsbutton buttonType = "other" buttonText = "Primary Button"></Mylsbutton>


    </div>
  );
}

export default App;
