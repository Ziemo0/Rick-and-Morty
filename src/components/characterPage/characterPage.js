import React from 'react';
import { Link } from 'react-router-dom';
import './characterPage.css';


function CharacterPage(props){

    const episodesArray =  [props.location.state.character.episode];

    return(
        
        <div className="content">
        <h1>{props.location.state.character.name}</h1>  
        <div className="containerCh">
        <div className="img">
        <img src={props.location.state.character.image} alt="img"/>
        </div>

         {/*Character bio */}   
            <ul>
                <li>Gender: {props.location.state.character.gender}</li>
                <li>Location: {props.location.state.character.location.name}</li>
                <li>Origin: {props.location.state.character.origin.name}</li>
                <li>Status: {props.location.state.character.status}</li>
                <li>Type: {props.location.state.character.type === "" ? 'unknown' : props.location.state.character.type}</li>
                <li>ID: {props.location.state.character.id}</li>
                <li>Created: {props.location.state.character.created}</li>
            </ul>
            <ul>
            <p>EPISODES:</p>
                {
                    episodesArray[0].map((episode, id) => <li><a key={id} href={episode}> { episode } </a></li>)
                }
            </ul>

            {/*Back button*/} 
            <div className="backMenu">
            <Link className="back" to={{
            pathname: `/`
            }}
            >Back</Link>
            </div>
        </div>  
        </div>
    );
}

export default CharacterPage;