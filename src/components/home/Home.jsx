import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import data from '../../data/data.json';

export default function Home() {
    <>
    <Header />
    <Tours tours={data} />
    <Footer />
    </>
}