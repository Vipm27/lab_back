import React from 'react';

const InfPlant = ({body, text}) => {

    return (
                <div className="informations_plant__block">
                    <p className="informations_plant__filling_hight">{text}</p>
                    <p className="informations_plant__filling_small">{body}</p>
                </div>
    );
};
export default InfPlant;