import React from 'react';
import './Button.css';

export function Button({ variant = 'tertiary', icon: Icon, children, className = '', onClick, type = 'button', ...props }) {
  const classNames = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ');
  return (
    <button type={type} className={classNames} onClick={onClick} {...props}>
      {Icon && <span className="btn__icon"><Icon /></span>}
      {children && <span className="btn__text">{children}</span>}
    </button>
  );
}
