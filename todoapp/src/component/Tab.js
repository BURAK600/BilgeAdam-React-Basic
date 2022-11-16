import React from 'react';

const Tab = (children) => {
    return (
        <div className='container'>
            {
            children.map((data,index) =>{

                return <button>{data.props.title}</button>
            })
        }
        </div>
    );
}

export default Tab;
