import React from 'react';
import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import data from '../../data/data.json';

export default function Home() {
    return(
    <>
    <Header />
    <Tours tours={data} />
    <Footer />
    </>
    )
}