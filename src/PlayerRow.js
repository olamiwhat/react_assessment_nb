import React from 'react';
import './PlayerRow.css';

const PlayerRow = ({name, points, reb, ast, addToFav, index}) => {
  return (
   
          <tr>
            <td>
              <button onClick={() =>addToFav(index)}>Add to Favorite</button>
            </td>
            <td>{name}</td>
            <td>{points}</td>
            <td>{reb}</td>
            <td>{ast}</td>
          </tr>

   )
}


export default PlayerRow;