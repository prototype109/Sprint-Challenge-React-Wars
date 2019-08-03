import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HomeWorld from '../HomeWorldCard/HomeWorldCard';

function PersonCard(props){
    const [personData, setPersonData] = useState({});
    const [personNum, setPersonNum] = useState(props.person);
    const [homeWorld, setHomeWorld] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/${personNum}/`)
            .then(personInfo => {
                //console.log('Person: ', personInfo.data);
                //console.log('HomeWorld: ', personInfo.homeworld);
                setPersonData(personInfo.data);

                return axios.get(personInfo.data.homeworld);
            })
            .then(homeWorldInfo => {
                console.log(homeWorldInfo.data);
                setHomeWorld(homeWorldInfo.data);
            })
            .catch(err => {
                console.log(`error: ${err}`);
            });
    }, [personNum]);

    // useEffect(() => {
    //     axios.get(personData.homeworld)
    //         .then(homeInfo => {
    //             console.log(homeInfo);
    //             //setHomeWorld(homeInfo.data)
    //         })
    //         .catch(err =>{
    //             console.log('error homeworld: ', err);
    //         })
    // }, []);

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
                <h1>Name: {personData.name}</h1>
                <hr/>
                <ul>
                    <li>Birth Year: {personData.birth_year}</li>
                    <li>Height: {personData.height}</li>
                    <li>Mass: {personData.mass}</li>
                    <li>Gender: {personData.gender}</li>
                </ul>
            </Shadow>
            <Shadow>
                <HomeWorld home={homeWorld} />
            </Shadow>
        </Container>
    );
}

export default PersonCard;