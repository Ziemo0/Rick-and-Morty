import React from 'react';
import { Link } from 'react-router-dom';
import './characterPage.css';


function CharacterPage(props){

    const episodesArray =  [props.location.state.character.episode];

    console.log(props.location.state.character);

    console.log(props.location.state.character.episode)
  
    return(
        
        <div className="content">
        <h1>{props.location.state.character.name}</h1>  
        <div className="containerCh">
        <div className="img">
        <img src={props.location.state.character.image} alt="img"/>
        </div>
            <ul>
                <li>Gender: {props.location.state.character.gender}</li>
                <li>Location: {props.location.state.character.location.name}</li>
                <li>Origin: {props.location.state.character.origin.name}</li>
                <li>Status: {props.location.state.character.status}</li>
                <li>ID: {props.location.state.character.id}</li>
                <li>Created: {props.location.state.character.created}</li>
            </ul>
            <ul>
                {
                    episodesArray.map((episode , id) => <li key={id}> {episode} </li>)
                }
            </ul>

            <Link className="back" to={{
        pathname: `/`
            }}
            >Back</Link>
        </div>  
        </div>
    );
}


export default CharacterPage;