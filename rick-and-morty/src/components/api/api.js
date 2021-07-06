import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './api.css';
import { Button, TextField } from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

//fetch api script
const fetchData = () => {
  return axios.get(`https://rickandmortyapi.com/api/character/`)
  .then((res) => {
    const {results} = res.data;
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


    const [pageNumber, setPageNumber] = useState(1);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    const [searchCh, setSearchCh] = useState('');

    return (
    <div className="App">
      <TextField label="Search" onChange={event => {setSearchCh(event.target.value)}}></TextField>
      <div className="container">
      {characters.filter((val) => {

        //search script
        if(searchCh === ""){
          return val;
        } else if (val.name.toLowerCase().includes(searchCh.toLowerCase())) {
          return val;
        } else {
          return false;
        }
        //display characters script
      }).map((character, id) => <div className="chInfo" key={id}>
      <img src={character.image} alt="pic"/>
      <p>{character.name}</p>
      <div className="divBIO">
      <Link className="BIO" to={{
        pathname: `/characterPage/${character.id}`,
        state: {character}
        
        }}>BIO</Link>
      </div>
      <Button variant="contained" color="primary" onClick={() => console.log(character.id)}>
        Episodes
      </Button>
      </div>)}
      </div>
  
      <ReactPaginate 
        
         previousLabel={"<"}
         nextLabel={">"}

         //PAGE COUNT TO DO
         pageCount={5}
         onPageChange={changePage}
         containerClassName={"paginationButton"}
         previousLinkClassName={"previousButton"}
         nextLinkClassName={"nextButton"}
         activeClassName={"paginationAcitve"}
         disabledClassName={"disabledButton"}
        >
      
        </ReactPaginate>
    </div>

  );
}

export default Api;

