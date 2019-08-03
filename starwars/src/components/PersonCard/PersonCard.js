import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HomeWorld from '../HomeWorldCard/HomeWorldCard';
import {FaArrowsAltH} from 'react-icons/fa';
import Person from './Person';

function PersonCard(props){
    const [personData, setPersonData] = useState([]);
    const [personNum, setPersonNum] = useState(props.person);
    const [homeWorld, setHomeWorld] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
            .then(personInfo => {
                //console.log('Person: ', personInfo);
                //console.log('HomeWorld: ', personInfo.homeworld);
                setPersonData(personInfo.data.results);

                // return axios.get(personInfo.data.homeworld);
            })
            // .then(homeWorldInfo => {
            //     console.log(homeWorldInfo.data);
            //     setHomeWorld(homeWorldInfo.data);
            // })
            .catch(err => {
                console.log(`error: ${err}`);
            });
    }, []);

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

    const IconSize = styled.div`
        margin-top: 40px;
        font-size: 4.5rem;
    `;

    return(
        // <Container>
        //     <Shadow>
        //         <Person personObj/>
        //     </Shadow>
        //     <IconSize>
        //         <FaArrowsAltH />
        //     </IconSize>
        //     <Shadow>
        //         {/* <HomeWorld home={homeWorld} /> */}
        //     </Shadow>
        // </Container>
        personData.map(person => <Person person={person} />)
    );
}

export default PersonCard;