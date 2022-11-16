import React from 'react';
import UserCard from '../components/molekul/UserCard';

export default function UserPageList() {

    const [data, setData] = React.useState([])

    const loadMore = () =>{

      try{
        fetch('https://randomuser.me/api/?results=10')
            // istek sonucu dönen değeri json formatında çıktılamnak için kullnırız.
            .then(response => response.json())
            .then(users=> setData([...data, ...users.results]))
            .catch(error => console.log(error))
            .finally(() => console.log('İşlem tamamlandı'));
    }catch(e){
        console.log('Beklenmeyen hata...: ', e);
    }




    }



  
    React.useEffect(()=>{
      /**
       * Eğer fetch isteğine method belirtmez iseniz, GET olarak çalışır
       */
      try{
          fetch('https://randomuser.me/api/?results=10')
              // istek sonucu dönen değeri json formatında çıktılamnak için kullnırız.
              .then(response => response.json())
              .then(users=> setData(users.results))
              .catch(error => console.log(error))
              .finally(() => console.log('İşlem tamamlandı'));
      }catch(e){
          console.log('Beklenmeyen hata...: ', e);
      }
    
    },[]);
  
    return (
      <>
          <div className='container-fluid text-bg-danger text-center'>
              <h1>KULLANICI LİSTESİ</h1>
          </div>
          <div className='container'>
              <div className='row'>

                {
                  data.map((user, index)=>{
                      return(
                          <UserCard key = {index}  data = {user}/>
                      )
                  })

                }

              </div>

              <div className='row text-center'>

                <button onClick={loadMore} className='btn btn-block mb-2'>load more...</button>

              </div>
          </div>
      </>
    
    )
  }
  
