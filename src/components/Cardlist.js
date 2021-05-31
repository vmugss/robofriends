import React from 'react';
import Card from './Card';
//import {robots} from './robots'

const Cardlist = ({robots}) => {
    const cardsArray = robots.map((user,i) =>{
        return <Card name={user.name} email={user.email} id={user.id} username={user.username} key={i}/>
    });
    return(
        <div>
            {cardsArray}
        </div>
    );
}

export default Cardlist;