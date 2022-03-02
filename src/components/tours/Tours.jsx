import React from "react";
const Tours = (props) =>{
    return(
        <>
        {
            props.tours.map(Tour => {
                return(
                    <div>
                        <h3>{Tour.name}</h3>
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