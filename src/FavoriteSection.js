import React from 'react';
import './FavoriteSection.css';

const FavoriteComponent = ({name, points, reb, ast, removePlayer, index, image}) => {
    return (
            <div className="favoriteContainer">
                <img src={image} className="favoriteImage"/>
                <div className="favDetailsContainer">
                    <h2>{name}</h2>
                    <div className="favDetail">
                        <div>
                            <p>PTS</p>
                            <p>{points}</p>
                        </div>
                        <div>
                            <p>REB</p>
                            <p>{reb}</p>
                        </div>
                        <div>
                            <p>AST</p>
                            <p>{ast}</p>
                        </div>
                    </div>
                    
                    <button onClick={() =>removePlayer(index)} className="removeButton">Remove</button>
                </div>
            </div>
    ) 
}

export default FavoriteComponent;