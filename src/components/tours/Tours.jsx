import React from "react";
const Tours = (props) =>{
    return(
        <>
        {
            props.tours.map(Tour => {
                return(
                    <div id="tourDiv">
                        <h3>Place: {Tour.name}</h3>
                        <img src={Tour.image} alt=""/>
                        <hr></hr>
                    </div>
                )
            })
        }
        </>
    )
};
export default Tours;