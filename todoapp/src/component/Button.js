import React from 'react';

const Button = (props) => {

    const selectVarriant = () =>{
        switch (props.varrient) {
            case "warning":
                return (<button  className='flex bg-red-500 flex-col text-center p-2 my-2 mx-2'>{props.text} {props.varriant} {props.liste ===undefined ? "" :props.liste[0]}</button>) 
                break; 
        
            default:
                break;
        }
    }

    let liste = [1,2,3,4]
    return (
        <div>

            {
                props.varriant ==="warning" ? (<button  className='flex bg-red-500 flex-col text-center p-2 my-2 mx-2'>{props.text} {props.varriant} {props.liste ===undefined ? "" :props.liste[0]}</button>) :

                (<button  className='flex  bg-yellow-100  flex-col text-center p-2 my-2 mx-2'>{props.text} {props.varriant} {props.liste ===undefined ? "" :props.liste[0]}</button>) 

            }



        </div>
    );
}

export default Button;
