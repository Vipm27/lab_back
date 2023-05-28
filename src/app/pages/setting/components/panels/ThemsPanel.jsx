import React from 'react';

const ThemsPanel = () => {
    return (
        <div className="bottom__right__radio__buttons">
        <div className="bottom__right__radio__button">
            <input id="brrb_1" type="radio" name="bottom__right__radio__button" value="1" />
            <label for="brrb_1">Шляпа</label>
        </div>
         
        <div className="bottom__right__radio__button">
            <input id="brrb_2" type="radio" name="bottom__right__radio__button" value="2"/>
            <label for="brrb_2">Новогодняя</label>
        </div>
         
        <div className="bottom__right__radio__button">
            <input id="brrb_3" type="radio" name="bottom__right__radio__button" value="3"/>
            <label for="brrb_3">LOVE</label>
        </div>

        <div className="bottom__right__radio__button">
            <input id="brrb_4" type="radio" name="bottom__right__radio__button" value="4"/>
            <label for="brrb_4">Ржумен</label>
        </div>

    </div>
    );
};

export default ThemsPanel;