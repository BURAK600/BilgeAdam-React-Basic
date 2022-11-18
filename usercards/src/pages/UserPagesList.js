import React from 'react';
import UserCard from '../components/molekul/UserCard';

import { useSelector, useDispatch } from 'react-redux';

import { getAllUsers } from '../store/features/userListSlice'

export default function UserPageList() {



  /**
   * react-redux ın sisteme entegre etmiş olduğu store useSelector ile secilir.
   * Buradan bize ulaşan store içindeki alyansları ile ilgili slice a  ulaşırız. Buradan sonra tek yapmamız gereken, slice içinde tanımlanana dataların isimleri ile ilgili datalara ulaşmaktır.
   * Burada globalstate dinlenmeye başlar ve her nereden değiştirilirse değiştirilsin, ilgili slice içindeki dataların değişmesi 
   * durumunda, bu sayfa yeniden render edilir.
   */
  const secilen = useSelector((store) => store.userList.secilen);
  const loading = useSelector((store) => store.userList.secilen);
  const data = useSelector((store) => store.userList.secilen);
  const dispatch = useDispatch();

  const loadMore = () => {


  };

  React.useEffect(() => {
    dispatch(getAllUsers);
  }, [dispatch
  ]);


  return (
    <>
      <div className='container-fluid text-bg-danger text-center'>
        <h1>KULLANICI LİSTESİ</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <p style={{ fontSize: 24 }}>Seçilen kullaınıcı sayısı: {secilen}  </p>


        </div>
        <div className='row'>

          {
            data.map((user, index) => {
              return (
                <UserCard key={index} data={user} />
              )
            })

          }

        </div>

        <div className='row text-center mb-5'>
          {
            loading ?
              <iframe width={100}
                height={100}
                src="https://embed.lottiefiles.com/animation/97443" title='loading'></iframe> :
              <button onClick={loadMore} className='btn btn-block mb-2'>load more...</button>

          }

        </div>
      </div>
    </>

  )
}

