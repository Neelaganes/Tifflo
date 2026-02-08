import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  GaugeIcon,
  UsersIcon,
  PersonIcon,
  RefreshIcon,
  MapPinIcon,
  BoxIcon,
  StarIcon,
  IdCardIcon,
  HelpIcon,
  ShieldIcon,
  DocumentIcon,
} from '../common/Icons';
import './Sidebar.css';

const navItems = [
  { path: '/', label: 'Dashboard', icon: GaugeIcon },
  { path: '/users', label: 'Users', icon: UsersIcon },
  { path: '/customers', label: 'Customers', icon: PersonIcon },
  { path: '/subscriptions', label: 'Subscriptions', icon: RefreshIcon },
  { path: '/routes', label: 'Routes', icon: MapPinIcon },
  { path: '/orders', label: 'Orders', icon: BoxIcon },
  { path: '/reviews', label: 'Reviews', icon: StarIcon, newBadge: true },
  { path: '/about', label: 'About us', icon: IdCardIcon, newBadge: true },
  { path: '/help', label: 'Help', icon: HelpIcon },
  { path: '/privacy', label: 'Privacy policy', icon: ShieldIcon },
  { path: '/terms', label: 'Terms and conditions', icon: DocumentIcon },
];

export function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__brand">Tifflo</div>
        <nav className="sidebar__nav">
          {navItems.map(({ path, label, icon: Icon, newBadge }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
              end={path === '/'}
              onClick={onClose}
            >
              <span className="sidebar__link-icon"><Icon /></span>
              <span className="sidebar__link-label">{label}</span>
              {newBadge && <span className="sidebar__badge">NEW</span>}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
