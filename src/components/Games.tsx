import React, { useState } from 'react';
import search from '../assets/images/search.svg';
import searchText from '../assets/images/search-text.svg';
import start from '../assets/images/start.svg';
import startText from '../assets/images/start-text.svg';
import slots from '../assets/images/slots.svg';
import slotsText from '../assets/images/slots-text.svg';
import live from '../assets/images/live.svg';
import liveText from '../assets/images/live-text.svg';
import newIcon from '../assets/images/new.svg';
import newText from '../assets/images/new-text.svg';
import jackpot from '../assets/images/jackpot.svg';
import jackpotText from '../assets/images/jackpot-text.svg';
import line from '../assets/images/line.svg';
import Games from './GameList';


const Game: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string | null>('start');

    const navItems = [
        { id: 'search', icon: search, text: searchText },
        { id: 'start', icon: start, text: startText },
        { id: 'new', icon: newIcon, text: newText },
        { id: 'slots', icon: slots, text: slotsText },
        { id: 'live', icon: live, text: liveText },
        { id: 'jackpot', icon: jackpot, text: jackpotText },
    ];

    const toggleActiveItem = (id: string) => {
        setActiveItem(prev => (prev === id ? null : id));
    };

    return (
        <section className='mb-16'>
            <nav style={styles.navbar}>
                {navItems.map(item => (
                    <div
                        key={item.id}
                        style={{
                            ...styles.navItem,
                            ...(activeItem === item.id ? styles.activeNavItem : {}),
                        }}
                        onClick={() => toggleActiveItem(item.id)}
                        className='nav-width'
                    >
                        <img src={item.icon} alt={item.id} style={styles.icon} />
                        <span>
                            <img src={item.text} alt={`${item.id} text`} />
                        </span>
                        {activeItem === item.id && <div style={styles.activeIndicator} />}
                    </div>
                ))}

            </nav>

            <div className="min-h-screen px-4 pb-1">
                <Games activeItem = {activeItem}/>
            </div>
        </section>

    );
};

const styles: { [key: string]: React.CSSProperties } = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '15px',
        width: '100%',
        bottom: '0',
        zIndex: 1000,
        marginTop: '10px',
    },
    navItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333',
        fontSize: '12px',
        cursor: 'pointer',
        padding: '0 10px',
        transition: 'color 0.3s',
        position: 'relative',
    },
    activeNavItem: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    icon: {
        width: '100px',
        height: '25px',
        marginBottom: '5px',
        transition: 'transform 0.3s',
    },
    activeIndicator: {
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '2px',
        backgroundColor: '#007BFF',
    },
};

export default Game;
