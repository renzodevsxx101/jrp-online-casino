import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Game from '../components/Games';
import Footer from '../components/Footer';


const Main: React.FC = () => {
    return (
        <>
            <Header balance={1990.6} />
            <main className='marg-10'>
                <Banner />
                <Game />
            </main>

            <Footer />
        </>
    );
};

export default Main;