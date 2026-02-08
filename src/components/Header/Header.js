import React, { useState } from 'react';
import { Button } from '../common/Button';
import {
  MenuIcon,
  ChartIcon,
  RocketIcon,
  ClockIcon,
  HeadsetIcon,
  ChatIcon,
  PersonIcon,
  ChevronDownIcon,
} from '../common/Icons';
import './Header.css';

export function Header({ onMenuClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__left">
        <button type="button" className="header__menu-btn" onClick={onMenuClick} aria-label="Toggle menu">
          <MenuIcon />
        </button>
        <span className="header__orders">
          <ChartIcon />
          1/30 orders
        </span>
        <Button variant="secondary" icon={RocketIcon}>Upgrade</Button>
        <div className="header__trial">
          <ClockIcon />
          <span>Your plan trial ends on 02 October 2045</span>
        </div>
      </div>
      <div className="header__right">
        <Button variant="tertiary" icon={HeadsetIcon}>Support</Button>
        <Button variant="tertiary" icon={ChatIcon}>Feedback</Button>
        <div className="header__user-wrap">
          <button
            type="button"
            className="header__user-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <PersonIcon />
            <span>Ravi kumar</span>
            <ChevronDownIcon />
          </button>
          {dropdownOpen && (
            <div className="header__dropdown">
              <button type="button" onClick={() => setDropdownOpen(false)}>Profile</button>
              <button type="button" onClick={() => setDropdownOpen(false)}>Settings</button>
              <button type="button" onClick={() => setDropdownOpen(false)}>Log out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
