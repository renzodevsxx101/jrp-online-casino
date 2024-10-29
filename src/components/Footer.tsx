import React, { useState } from 'react';
import sport from '../assets/images/sports.svg';
import sportText from '../assets/images/sports-text.svg';
import star from '../assets/images/star.svg';
import starText from '../assets/images/star-text.svg';
import inv from '../assets/images/invite.svg';
import invText from '../assets/images/invite-text.svg';
import cashier from '../assets/images/cashier.svg';
import cashierText from '../assets/images/cashier-text.svg';
import casino from '../assets/images/casino.svg';
import casinoText from '../assets/images/casino-text.svg';

const Footer: React.FC = () => {

    const navItems = [
        { id: 'sport', icon: sport, text: sportText },
        { id: 'star', icon: star, text: starText },
        { id: 'inv', icon: inv, text: invText },
        { id: 'casino', icon: casino, text: casinoText },
        { id: 'cashier', icon: cashier, text: cashierText },
    ];

    return (
        <section>
            <nav style={styles.navbar}>
                {navItems.map(item => (
                    <div
                        key={item.id}
                        style={{
                            ...styles.navItem,
                        }}
                    >
                        <img src={item.icon} alt={item.id} style={styles.icon} />
                        <span>
                            <img src={item.text} alt={`${item.id} text`} />
                        </span>
                    </div>
                ))}

            </nav>
{/* 
            <div className="min-h-screen p-4">
                <Games activeItem = {activeItem}/>
            </div> */}
        </section>

    );
};

const styles: { [key: string]: React.CSSProperties } = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '15px 0',
        width: '100%',
        bottom: '0',
        zIndex: 1000,
        position: 'fixed',
        backgroundColor: '#F0FFFF'
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
        bottom: '-5px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '2px',
        backgroundColor: '#007BFF',
    },
};

export default Footer;