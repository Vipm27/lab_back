import React from 'react';
import BtnRed from '../ui/BtnRed';

const GeneralPanel = () => {
    return (
        <div>
            <div className="bottom__right__buttons">
                <button className="themes__button__one">Смена типа растения</button>
            </div>

            <BtnRed>Удалить растение</BtnRed>
            <BtnRed>Выйти из аккаунта</BtnRed>
        </div>
    );
};

export default GeneralPanel;