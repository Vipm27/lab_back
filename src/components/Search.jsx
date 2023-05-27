import React from 'react';
import search from './image/search.png'
import './css/search.css'
const Search = ({onChangeFunc}) => {
  return (
    <div className="navigation_main">
    <div className="navigation">
        <input type="text" className="navigation__text" onChange={onChangeFunc} placeholder="Какой фильм?"/>
        <img src={search} className="navigation__sticker" alt='Hello'/>
    </div>
    </div>
  )
}

export default Search