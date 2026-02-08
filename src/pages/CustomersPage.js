import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { RefreshIcon, PlusIcon } from '../components/common/Icons';
import { CustomerTabs } from '../components/CustomerTabs/CustomerTabs';
import { CustomerSearch } from '../components/CustomerSearch/CustomerSearch';
import { CustomerTable } from '../components/CustomerTable/CustomerTable';
import './CustomersPage.css';
// import axios from 'axios';

const initialCustomers = [
  { id: 0, name: 'Bhanu', email: 'bhanu@example.com', phone: '+91 98765 43210', walletBalance: 780.00, pendingOrders: 1 },
  { id: 1, name: 'Veeralakshmi', email: 'veera@example.com', phone: '+91 98765 43211', walletBalance: 1200.50, pendingOrders: 0 },
  { id: 2, name: 'vipul', email: 'vipul@example.com', phone: '+91 98765 43212', walletBalance: 450.00, pendingOrders: 2 },
  { id: 3, name: 'Test customer', email: 'test@example.com', phone: '+91 98765 43213', walletBalance: 0.00, pendingOrders: 0 },
];

export function CustomersPage() {
  const [activeTab, setActiveTab] = useState('customers');
  const [searchValue, setSearchValue] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  // useEffect(() => {
  //   axios.get(`http://localhost:8031/details`).then((res) => {
  //     if (res.data) setData(res.data);
  //     else alert('error');
  //   });
  // }, []);

  const handleSearch = () => {
    setSearchFilter(searchValue.trim());
  };

  return (
    <div className="customers-page">
      <CustomerTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="customers-page__head">
        <h1 className="customers-page__title">Customers</h1>
        <div className="customers-page__actions">
          <Button variant="tertiary" icon={RefreshIcon}>Refresh</Button>
          <Button variant="primary" icon={PlusIcon}>Add customer</Button>
        </div>
      </div>
      <div className="customers-page__search">
        <CustomerSearch
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
        />
      </div>
      <div className="customers-page__table">
        <CustomerTable customers={initialCustomers} searchFilter={searchFilter} />
      </div>
    </div>
  );
}
