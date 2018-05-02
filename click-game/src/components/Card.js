import React from "react";

const Card = props => (
    <div className="card">
        <div className="characterImage">
            <img alt={props.name} src={props.image} onClick={() => props.imageClick(props.id)} />
        </div>
    </div>
);

export default Card;