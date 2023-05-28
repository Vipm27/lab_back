import React from 'react';
import './style/index.css';
import LeftSide from './components/LeftSide/LeftSide';
import RightSideChoise from './components/RightSide/RightSideChoise';
function Choice() {


  return (
    <div className="main">
        <LeftSide />
        <RightSideChoise />
    </div>
  );
}

export default Choice;
