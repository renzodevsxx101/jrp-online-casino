import React from 'react';
import menuIcon from '../assets/images/menu-icon.svg';
import logoIcon from '../assets/images/logo.svg';
import walletIcon from '../assets/images/wallet-icon.svg';
import profileIcon from '../assets/images/profile-icon.svg';
import '../styles/Header.css';

interface HeaderProps {
  balance: number;
  
}

const Header: React.FC<HeaderProps> = ({
  balance
}) => {
  return (
    <div className="header-container">
      <header className="header-main">
        <div className="header-left">
          <button className="menu-button">
            <img src={menuIcon} alt="Menu" className="menu-icon" />
          </button>
          
          <div className="logo-container">
            <img src={logoIcon} alt="FUNBB" className="logo" />
          </div>
        </div>

        <div className="header-right">
          <div className="wallet-info">
            <img src={walletIcon} alt="Wallet" className="wallet-icon" />
            <span className="balance">
              ${balance.toFixed(1)}
            </span>
          </div>
          <div className="divider"></div>
          <button className="profile-button">
            <img src={profileIcon} alt="Profile" className="profile-icon" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;