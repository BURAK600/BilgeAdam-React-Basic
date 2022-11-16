import React from 'react'

 function UserImage(props) {
  return (



    <div>

<img
 style={{
     marginLeft: '10%', 
     width: '80%',
      height: '80%',
       borderRadius: '50%' 
    }} 
    src={props.image}
    alt='Kullanıcı resmi' />

    </div>


  )
}

export default React.memo(UserImage) // sarmalama işlemi
