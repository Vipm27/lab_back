import React from 'react';
import Input from '../ui/Input';
import Rotate from '../ui/Rotate';
const NormPanel = () => {
    return (
        <div className="norms">
        <div className="norms__title">
            Нормы
        </div>
        <div className="norms_panel">

        <div className="norms_panel_into">
            <div className="norms_panel_into_title">Температура</div>
            <div className="norms_panel_into_title">Освещенность</div>
            <div className="norms_panel_into_title">Влажность</div>
        </div>

        <div className="norms_panel_into">
            <div className="norms_panel_into_stat">0-100 °C</div>
            <div className="norms_panel_into_stat">0-30k Lux</div>
            <div className="norms_panel_into_stat">0-100 %</div>
        </div>

        <div className="norms_panel_into">
            <Rotate/>
            <Rotate/>
            <Rotate/>
        </div>

        <div className="norms_panel_into__input">
            <Input/>
            <Input/>
            <Input/>
        </div>

    </div>
    <div className="norms__button__div">
                    <button className="norms__button">Принять</button>
                </div>
    </div>
    );
};

export default NormPanel;