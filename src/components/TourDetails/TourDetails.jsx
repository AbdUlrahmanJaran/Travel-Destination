import React from "react";
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useState } from "react";

export default function TourDetails({data}) {
    let {id} = useParams();
    let city = data.filter(city => city.id === id);
    const [seeMore, setSeeMore] = useState(false);
    let seeMoreHandel = () =>{
        setSeeMore(!seeMore);
    }
    return (
        <div>
            <>
            <Header />
            <article>
                <div >
                    <h1>Name: {city[0].name}</h1>
                    <img src={city[0].image} alt="" />
                    <h3>The average price of the trip: {city[0].price}</h3>
                    <p>
                        Info: { seeMore ? city[0].info : `${city[0].info.slice(0,270)}...`}
                        <button onClick={() => seeMoreHandel()}>{seeMore ? "See Less" : "See More"}</button>               
                    </p>
                </div>
            </article>
            <Footer />
            </>
        </div>
    )
}