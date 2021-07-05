import React, { useEffect, useState } from 'react';
import axios from 'axios';

const fetchData = () => {
  return axios.get('https://rickandmortyapi.com/api/character')
  .then((res) => {
    const {results} = res.data;
    console.log(results);
    return results;
  })
  .catch((err) => {
    console.log(err);
  })
}

function Api() {

  const [characters, setCharacters] = useState([]);

    useEffect(() => {
      fetchData()
      .then(apiCharacters => {
        setCharacters(apiCharacters)
      })
    }, [])

    

    return (
    <div className="App">
      <p>TEST</p>
      {characters.map((character, id) => <div key={id}>
      <img src={character.image} alt="pic"/>
    {character.name}
  </div>)}
    </div>
  );
}

export default Api;

