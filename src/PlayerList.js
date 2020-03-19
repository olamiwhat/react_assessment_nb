import React, { useEffect, useState } from 'react';
import PlayerRow from './PlayerRow'
import FavoriteComponent from './FavoriteSection';
import './PlayerList.css';

const jsonUrl = 'https://cors-anywhere.herokuapp.com/http://my-json-server.typicode.com/nortenzio/leagueplayerstats/players';



const PlayerList = () => {

    // create state for playerData
    const [playerData, updatePlayers] = useState([]);

    // create state for favorites
    const [favoritePlayers, updateFavorites] = useState([])
    
    // update after component has mounted
    useEffect(()=> {
        fetch(jsonUrl)  
        .then((response) => response.json())
        .then((data) => {
            const newData = data.sort(function(a, b) {
                if(!a.hasOwnProperty("pts") || !b.hasOwnProperty("pts")) return 0;
                const pointsA = a.pts;
                const pointsB = b.pts;

                let comparison = 0;
                if (pointsA > pointsB) {
                    comparison = 1;
                } else if (pointsA < pointsB) {
                    comparison = -1;
                }
                return comparison * -1;
            })
            updatePlayers(newData);
        });
    }, []);
    
    // function to add to favorite
    const addToFav = (index) => {
        const newFav = [...favoritePlayers, playerData[index]];
        updateFavorites(newFav);
    }

    //Function to remove from Favorite
    const removeFromFav = (index) => {
        const newFav = [...favoritePlayers].filter((fav) => {return [...favoritePlayers].indexOf(fav) !== index})
        updateFavorites(newFav);
    }

    // function to render favorite
    const renderFavorite = () => {
        if(favoritePlayers.length === 0) return (<p>No Favorites Yet</p>)
        return favoritePlayers.map((fav, index) => (
            <FavoriteComponent key={index.toString()}  name={fav.name} points={fav.pts.toFixed(1)} reb={fav.reb.toFixed(1)} ast={fav.ast.toFixed(1)} index={index} removePlayer={removeFromFav} image={fav.img}/>
        ))
    }

    // function to render players
    const renderPlayers = () => {
        return playerData.map((player, index) => (
            <PlayerRow key={index.toString()} name={player.name} points={player.pts.toFixed(1)} reb={player.reb.toFixed(1)} ast={player.ast.toFixed(1)} addToFav={addToFav} index={index} />
        ))
    }

    return (
        <div>
            <div>
                <h1>Favorites: </h1>
                <div className="favoritesMain">
                    {renderFavorite()}
                </div>
            </div>

            <div>
                <h1>Players: </h1>
                <table>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>PTS</th>
                    <th>REB</th>
                    <th>AST</th>
                </tr>
    
                    {renderPlayers()}

                </table>
            </div>

        </div>
         
      
    )
}
export default PlayerList;
