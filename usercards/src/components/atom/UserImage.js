import React from 'react'
import {addSecilen, removeSecilen } from '../../store/features/userListSlice'


import { useDispatch } from 'react-redux';

function UserImage(props) {
  const dispatch = useDispatch();

  const onClick = (evt) => {
    console.log(evt.target.checked)

    if (evt.target.checked)
      dispatch(addSecilen());
    else
      dispatch(removeSecilen());
  }

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


      <div style={{ position: "absolute", top: '1%', right: '1%' }}>
        <input type="checkbox" onClick={onClick} />
      </div>

    </div>

  )
}

export default React.memo(UserImage) // sarmalama işlemi
