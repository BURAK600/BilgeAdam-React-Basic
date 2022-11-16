import React from 'react';

const ListGroup = (props) => {
const {items} = props;


    return (
                    
            <ul className='list-group list-group-flush'>
                {
                    items.map((item, index)=>{
                        return(
                            <li key = {index} className='list-group-item'>{item}</li>
                        )
                    })
                }

</ul>
      
    );
}

export default React.memo(ListGroup);
