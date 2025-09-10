import React from 'react'
// import searchIcon from '../search.svg';
const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
      <div>
        <img src="./search.svg" alt="search icon" />
        <input 
        type="text" 
        placeholder='Search from +1000 movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
        
    </div>
  )
}

export default Search