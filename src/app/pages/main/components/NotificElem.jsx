import React from 'react';
import fire from '../images/fire.png' 
import dawn from '../images/dawn.png' 
import rain from '../images/rain.png' 
import plantF from '../images/plant_photo.png' 
import frozen from '../images/frozen.png' 
import battery from '../images/battery-half.png' 
import { Link } from 'react-router-dom';

const NotificElem = ({name,  recomendate,  plant, elems, face,}) => {
    return (
               <Link to={'/setting'}>
                <button class="square-button">
                    <div class="button-head-background"></div>
                    <div class="red-lamp"></div>
                    <div class="button-text">
                        <div class="button-title">{name}</div>
                        <div class="button-description">{recomendate}</div>
                    </div>
                    <div class="button-icons">
                        <img alt=''  src={battery}  class="left-button-small-icon"  />
                        <div class="button-small-icons">
                            <img alt='' src={fire} class="right-button-small-icon" />
                            <img alt='' src={dawn} class="right-button-small-icon" />
                            <img alt='' src={rain} class="right-button-small-icon" />
                        </div>
                    </div>
                    <img alt=''  src={plantF} class="plant-icon" height="182" width="182" />
                    <img alt='' src={frozen} class="state-icon" />
                </button>
                </Link>
    );
};

export default NotificElem;