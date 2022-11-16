import React from 'react';

const CardBody = (props) => {
    return (

        <div className='card-body'>

            <h4 className='card-title'>{props.title}</h4>

            <p className='card-text'>{props.text}</p>

        </div>

    );
}

export default React.memo(CardBody);
