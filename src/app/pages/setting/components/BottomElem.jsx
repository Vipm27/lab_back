import React from 'react';
import GrafPanel from './panels/GrafPanel';
import ThemsPanel from './panels/ThemsPanel';
import GeneralPanel from './panels/GeneralPanel';
import InputName from './ui/InputName';
const BottomElem = () => {

    return (
        <div className="bottom">

        <GrafPanel/>
        <div className="bottom__right">
            <div className="bottom__right__title">
                Темы
            </div>

           <ThemsPanel/>

            <InputName/>

            <GeneralPanel/>
        </div>
    </div>
    );
};

export default BottomElem;