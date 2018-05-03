import React from "react";

const Card = props => (
    <div className="row">
        <div className="col s12 m5">
            <div className="card-panel hoverable">
                <div className="card-body characterImage">
                    <img className="responsive-img" alt={props.name} src={props.image} onClick={() => props.imageClick(props.id)} />
                </div>
            </div>
        </div>
    </div>
);

export default Card;