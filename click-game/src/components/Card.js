import React from "react";

const Card = props => (
    <div className="characterImage">
        <img className="responsive-img hoverable" alt={props.name} src={props.image} onClick={() => props.imageClick(props.id)} />
    </div>

);

export default Card;