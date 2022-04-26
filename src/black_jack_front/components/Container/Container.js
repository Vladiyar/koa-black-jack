import React from 'react';
import Sidebar from "./Sidebar";
import GameArea from "./GameArea"

const Container = () => {
    return (
        <div className="container">
            <GameArea/>
            <Sidebar/>
        </div>
    );
};

export default Container;