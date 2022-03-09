import React from "react";
import { Link } from "react-router-dom";
import tourCss from "./Tour.css"
export default function Tour({city}) {
    return (
        <>
        <hr></hr>
        <div class= "div">
            <Link to={`city/${city.id}`}>
            <h2 class= "name">{city.name}</h2>
            <img src={city.image} alt="" />
            </Link>
        </div>
        </>
    )
}