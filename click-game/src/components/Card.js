import React from "react";

const Card = props => (
    <div className="card" width="200px">
        <div className="card-body characterImage">
            <img alt={props.name} src={props.image} onClick={() => props.imageClick(props.id)}/>
        </div>
    </div>
);

export default Card;