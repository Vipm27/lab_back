import React from 'react';

const BtnRed = ({children}) => {
    return (
    <div className="bottom__right__buttons">
        <button className="themes__button__tree">{children}</button>
    </div>
    );
};

export default BtnRed;