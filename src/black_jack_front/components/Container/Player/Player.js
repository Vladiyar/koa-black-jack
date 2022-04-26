import React from 'react';
import Name from "./Name";
import Hand from "./Hand";
import Score from "./Score";

const Player = () => {
    return (
        <div className="player">
            <Name/>
            <Hand/>
            <Score/>
        </div>
    );
};

export default Player;