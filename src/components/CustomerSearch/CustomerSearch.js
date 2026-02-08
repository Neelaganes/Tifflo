import React from 'react';
import { Button } from '../common/Button';
import './CustomerSearch.css';

export function CustomerSearch({ value, onChange, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSearch();
  };
  return (
    <div className="customer-search">
      <input
        type="text"
        className="customer-search__input"
        placeholder="Search by name, email or phone"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button variant="primary" onClick={onSearch}>Search</Button>
    </div>
  );
}
