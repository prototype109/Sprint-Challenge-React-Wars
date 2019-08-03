import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Home from '../HomeWorldCard/HomeWorldCard';


function Person(props){

    const Container = styled.div`
        display: flex
        justify-content: space-around;
        background: rgba(255, 255, 255, 0.5);
        max-width: 90%;
        margin: 0 auto;
    `;

    const Shadow = styled.div`
        box-shadow: 10px 0 10px black;
        min-width: 500px;
    `;

    return(
        <Container>
            <Shadow>
                <h1>Name: {props.person.name}</h1>
                <hr/>
                <ul>
                    <li>Birth Year: {props.person.birth_year}</li>
                    <li>Height: {props.person.height}</li>
                    <li>Mass: {props.person.mass}</li>
                    <li>Gender: {props.person.gender}</li>
                </ul>
            </Shadow>
            <Shadow>
                <Home home={props.person.homeworld}/>
            </Shadow>
        </Container>
    );
}

export default Person;