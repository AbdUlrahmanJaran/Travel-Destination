import React from "react";

export default function Tour({city}) {
    return (
        <div>
            <h3>{city.name}</h3>
            <img src={city.image} alt="" />
            <hr></hr>
        </div>
    )
}