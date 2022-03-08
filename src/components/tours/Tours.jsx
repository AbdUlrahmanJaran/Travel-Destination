import React from "react";
import Tour from "./tour/Tour";

const Tours = (props) =>{
    return(
        <>
        {
            props.tours.map(city => {
                return(
                    <Tour key={city.id} city={city}/>

                )
            })
        }
        </>
    )
};
export default Tours;