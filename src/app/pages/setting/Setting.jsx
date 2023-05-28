import React from 'react';
import './setting.css'

import TopElem from './components/TopElem';
import BottomElem from './components/BottomElem';
import arrow from './media/arrow-left-circle.png'
import { Link } from 'react-router-dom';
const Setting = () => {

    return (
        <div>

              <div className="header">
        <div className="name">Ольга</div>
          <Link to={'/main'} > <img alt='' src={arrow}/></Link>
        </div>
          <TopElem/>
          <BottomElem/>
        </div>
    );
};

export default Setting;