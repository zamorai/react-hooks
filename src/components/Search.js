import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {

  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);


  useEffect (() => {
    const searchWiki = async () => {
     const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: "*",
          format: 'json',
          srsearch: term
        }
      });
      setResults(response.data.query.search);
    };

    if (term && !results.length) {
      searchWiki();
    } else {
      const timeoutId = setTimeout(() => {
        if(term) {
          searchWiki();
        }  
      }, 500);
  
      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key = {result.pageid} className = "item">
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" className = 'ui button'>Go</a>
        </div>
        <div className = "content">
          <div className = "header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML = {{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className = "ui form">
        <div className = "field">
          <label>Enter Search Term</label>
          <input className='input' value = {term} onChange = {e => setTerm(e.target.value)}></input>
        </div>
      </div>
      <div className = "ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}
