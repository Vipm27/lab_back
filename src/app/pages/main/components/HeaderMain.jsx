import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logoEMP.png' 
import frown from '../images/frown.png' 
import smile from '../images/smile.png' 
import search from '../images/search_icon.png' 
const HeaderMain = () => {
    const [valueSlider, setValueSlider] = useState('327px')
    return (
    <div class="top-panel">
        <div class="search">
            <img className='search__image' alt='' src={search} />
            <form action="" method="get">
                <input name="s" placeholder="Найти" type="search" />
            </form>
        </div>
        <div class="slider">
            <img alt='' src={frown} id="slider-left-icon" />
            <div className='slider__range'>
                <div className='slider__range_fooler' style={{width:valueSlider}}></div>
            </div>
            <img alt='' src={smile} id="slider-right-icon" />
        </div>
        <div class="logo">
            <Link to={'/choice'}>
                <img alt='' className='logo__image' src={logo} width="77" height="77"  />
            </Link>
        </div>

    </div>
    );
};

export default HeaderMain;