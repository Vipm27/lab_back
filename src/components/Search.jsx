import React from 'react';
import './css/search.css'
const Search = ({onChangeFunc}) => {
  return (
    <div className="navigation_main">
    <div className="navigation">
        <input type="text" className="navigation__text" onChange={onChangeFunc} placeholder="Какой фильм?"/>
    </div>
    </div>
  )
}

export default Search