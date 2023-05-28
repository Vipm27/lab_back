import React from 'react';
import check from '../../media/check-circle.png'

const InputName = () => {
    return (
        <div className="themes__line__input__block">
            <input className="themes__line__input" placeholder="Введите новое имя питомца"/>
            <img alt='' className="themes__line__input__img" src={check}/>
        </div>
    );
};

export default InputName;