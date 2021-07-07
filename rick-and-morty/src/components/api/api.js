import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './api.css';
import { TextField } from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';



function Api() {

  const [currentPage, setCurrentPage] = useState(1);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage+1);
  }
  
  //Fetch API script
  const api = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

  const fetchData = () => {
    return axios.get(api)
    .then((res) => {
      const results = res.data;
      return results;
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
 
  const [pages, setPages] = useState(null);

  const [characters, setCharacters] = useState([]);


    useEffect(() => {

      const abortCont = new AbortController();

      fetchData({ signal: abortCont.signal })
      .then(apiCharacters => {
        setCharacters(apiCharacters.results)
        setPages(apiCharacters.info.pages)
      })
      return () => abortCont.abort();
      // eslint-disable-next-line
    }, [api])
  
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
       
        {/*Character page button*/} 
      <div className="divBIO">
      <Link className="BIO" to={{
        pathname: `/characterPage/${character.id}`,
        state: {character}
        }}>BIO</Link>
      </div>

        {/*Episode droplist (in progress)*/} 
        <label>EPISODES: </label>
        <select key={id}>
          <option> in progress </option>  
        </select>
      </div>)}
      </div>

        {/*Pagination*/} 
      <ReactPaginate 
        
         previousLabel={"<"}
         nextLabel={">"}
         pageCount={pages}
         onPageChange={handlePageClick}
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

