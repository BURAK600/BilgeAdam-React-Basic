import React from 'react';
import CardBody from '../atom/CardBody';
import ListGroup from '../atom/ListGroup';
import UserImage from '../atom/UserImage';

export default function UserCard(props) {
    
    const {data} =props;

    const items = ["Yaş..: " + data.dob.age , "Telefon: " + data.phone , "Mail..: " +  data.email];

    return (

      <div className='col-md-3 mb-3'>
        <div className='card text-bg-info'>


          <UserImage image={data.picture.large}/>
          <CardBody title={data.name.first + ' ' + data.name.last} text= {data.location.country + ' da yazılım geliştiricisi olarak devam...'}/>
          <ListGroup items={items}/>


        </div>
      </div>

    );
  }
  
