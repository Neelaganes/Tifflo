import React from 'react';
import './CustomerTabs.css';

const TABS = [
  { id: 'customers', label: 'Customers' },
  { id: 'service-areas', label: 'Service areas' },
  { id: 'subscriptions', label: 'Subscriptions' },
];

export function CustomerTabs({ activeTab, onTabChange }) {
  return (
    <div className="customer-tabs">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`customer-tabs__tab ${activeTab === tab.id ? 'customer-tabs__tab--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
