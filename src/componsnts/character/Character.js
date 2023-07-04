import React from 'react';
// id,name,status,species,gender,image
const Character = (props) => {
    let {id, name, status, gender, species, image} = props;


    return (
        <div>
            <h2>{id} {name} </h2>
            <p>{status} {gender} {species}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;
