import React, { useState } from 'react';
import MainpageLayout from '../components/MainpageLayout';
import {apiGet} from "../misc/config"

const Homepage = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result =>{
      setResults(result);
      console.log(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0){
      return <div>No Results</div> 
    }
    
    if (results && results.length > 0 ){
      return results[0].show ? results.map(item => 
      <div key={item.show.id}>{item.show.name}</div>) :
      results.map( item => (
      <div key={item.person.id}>{item.person.name}</div>
      ));
    };

    return null;
};

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  }
  
  return (
    <MainpageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder="Search for an movie/actor"
        value={input}
      />

      <div>
        <label htmlFor="movies-search">
          Shows
          <input id="movies-search" 
            type="radio"
            value="shows" 
            onChange={onRadioChange}
            checked={isShowsSearch}/>
        </label>

        <label htmlFor="actors-search">
          Actors
          <input id="actors-search" 
            type="radio" 
            value="people"
            onChange={onRadioChange} 
            checked={!isShowsSearch} />
        </label>
      </div>


      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainpageLayout>
  );
};

export default Homepage;