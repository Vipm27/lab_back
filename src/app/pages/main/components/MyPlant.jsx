import React from 'react';
import Nina from '../images/Nina-plant.png' 
import emoji from '../images/emoji-pleased.png' 
import fire from '../images/fire.png' 
import dawn from '../images/dawn.png' 
import rain from '../images/rain.png' 
import battery from '../images/battery-half.png' 

import timeline from '../images/timeline.png' 
import { Link } from 'react-router-dom';
import IconLitl from './ui/IconLitl';

const MyPlant = ({name, type, recomendate, plant, elems, face, date }) => {
    return (
        <Link to={'/setting'}>
             <button class="rectangular-button">
            <img alt='' src={Nina} class="rectangular-button-plant-icon" width="202px" height="188px" />
            <div class="rectangular-button-state-display">
                <img alt=''  src={emoji} class="rectangular-button-plant-state-icon" />
            </div>
            <div class="rectangular-button-head-background"></div>
            <div class="rectangular-button-text">
                <div class="rectangular-button-title">{name}</div>
                <div class="rectangular-button-description">{type}</div>
                <div class="rectangular-button-description">{recomendate}</div>
            </div>
            <div class="rectangular-button-small-icons">
                <IconLitl src={fire} />
                <IconLitl src={dawn} />
                <IconLitl src={rain} />
                <IconLitl src={battery} />
            </div>
            <div class="rectangular-button-timeline">
                <img alt='' src={timeline} />
            </div>
        </button>
        </Link>
    );
};

export default MyPlant;