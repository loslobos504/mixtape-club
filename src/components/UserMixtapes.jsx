import React from 'react';



const UserMixtapesList = (props) => {
    const { searchResults } = props;
    console.log(props);
    return (
        <ul className="list-group col-12 col-md-8 my-mixtape-list">
            <li className="list-group-item active bg-info">My Mixtapes:</li>
            <li className="list-group-item">Mixtape 1</li>
            <li className="list-group-item">Mixtape 2</li>
            <li className="list-group-item">Mixtape 3</li>
            <li className="list-group-item">Mixtape 4</li>
        </ul>
    )
}


export default UserMixtapesList;