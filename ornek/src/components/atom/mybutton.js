import React from 'react';

/**
 * 
 * @returns props -> bir bileşene, function component'e verilen degerlerdir.
 */

const Mybutton = (props) => {

    const [count, setCount] = React.useState(0);
    const onclick = () =>{

        setCount(count+1); 

        props.onClick();
    
    }

    console.log("Mybutton rendering")

    return (
        <div>
            <button onClick={onclick}>{props.bubenimtanimim}</button>
            <br />
            <p>sayı: {count}</p>
        </div>
    );
}

export default Mybutton;
