import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails'
import data from './data/data.json';
import css from './App.css'

export default function App() {
    return (
        <>  
            <center>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/city/:id" element={<TourDetails data={data} />} />
            </Routes>
            </center>
        </>
    )
}