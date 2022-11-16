import React from 'react';

const Mylsbutton = (props) => {
  return (

    <>
    
    {
      props.buttonType === 'primary' ?
      <button className='btn btn-primary'
      onClick={props.onClick}>{props.buttonText}</button>
      :

      <button className='btn btn-secondary' onClick={props.onClick}>{props.buttonText}</button>

    }
    
    
    </>
  );
}

export default React.memo(Mylsbutton);
