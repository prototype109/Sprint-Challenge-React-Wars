import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

function HomeWorldCard(props){
    // const [homeWorld, setHomeWorld] = useState('');

    // useEffect(() => {
    //     axios.get(props.home)
    //         .then(homeInfo => {
    //             console.log('HomeWorld: ', homeInfo);
    //             //setHomeWorld(homeInfo.data)
    //         })
    //         .catch(err => {
    //             console.log('homeWorld error: ', err);
    //         });
    // }, []);

    return(
        <div>
            <h1>Home World: {props.home.name}</h1>
            <hr/>
            <ul>
                <li>Climate: {props.home.climate}</li>
                <li>Diameter: {props.home.diameter}</li>
                <li>Gravity: {props.home.gravity}</li>
                <li>Orbital Period: {props.home.orbital_period}</li>
            </ul>
        </div>
    );
}

export default HomeWorldCard;