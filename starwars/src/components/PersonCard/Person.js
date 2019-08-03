import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


function Person(props){

    const Shadow = styled.div`
        box-shadow: 10px 0 10px black;
        max-width: 500px;
    `;

    return(
        <div>
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
        </div>
    );
}

export default Person;