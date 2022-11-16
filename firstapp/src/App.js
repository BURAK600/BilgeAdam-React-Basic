
import './App.css';

/** 
 * 
 * 1- functional component daha sık kullanılmaktadır.
 * 2- Componentlerin adı büyük harfle başlamalıdır.
 * 3- Her component mutlaka bir return fonksiyonu içermelidir.
 * 4- Bu function export edilmelidir.
 * 
 * 
*/


function App() {

  /**
   * Bu kısımda if,for while vs. gibi kodlama yapılabilir.
   * 
   */

  let sayi = 4;
  let isim= "Ahmet";
  let dizi = [1,2,3,4,5];
  dizi.map(s=>console.log(s));

  const isimlistesi = ["Ahmet", "Mehmet", "Ali", "Veli", "Ayşe", "Fatma", "Zeynep"]; 

  return (
    <div className="App">
      <header className="App-header">

          <h1>React Projem</h1>

          <p>Merhaba {isim}</p>
          <p>Yaşım {sayi}</p>
          <p>Kullanıcı Listesi</p>
          <ul>
            {isimlistesi.map((data,index)=>{

              return index%2===0 

              ? <li>{data}</li>

              : <li style = {{color: "red"}}>{data}</li>
              
            })}
            
          </ul>

       
      </header>
    </div>
  );
}

export default App;
