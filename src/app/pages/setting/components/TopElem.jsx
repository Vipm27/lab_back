import React from 'react';
import plant from '../media/plant.png'
import NormPanel from './panels/NormPanel';
import Condition from './Condition';

const TopElem = () => {
    return (
        <div className="top">

        <div className="top__left">

            <Condition/>
            <NormPanel/>

        </div>

        <div className="top__right">
            <img alt='' calss="plant__img" src={plant}/>
        </div>
    </div>

    );
};

export default TopElem;