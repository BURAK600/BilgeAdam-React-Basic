import React from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const ReturnExamPage = () => {

    const [firstPage, setFirstPage] = React.useState(true);
    const [secondPage, setSecondPage] = React.useState(true);
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-md-2'>

                    <button className='btn btn-danger' onClick={() => {
                        setFirstPage(!firstPage);

                    }}>Kapat</button>
                </div>

                <div className='col-md-4' style={
                    {
                        height: '500px',
                        backgroundColor: 'red'

                    }

                }>
                    {
                        firstPage ? <FirstPage></FirstPage> : null
                    }
                    
                </div>
                <div className='col-md-4' style={
                    {
                        height: '500px',
                        backgroundColor: 'yellow'

                    }

                }>
                    {
                        secondPage ? <SecondPage></SecondPage> : null
                    }
                </div>
                <div className='col-md-2'>

                    <button className='btn btn-danger' onClick={() => {
                        setSecondPage(!secondPage);

                    }}>Kapat</button>
                </div>
            </div>

        </div>
    );
}

export default ReturnExamPage;
