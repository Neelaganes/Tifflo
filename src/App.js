import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { CustomersPage } from './pages/CustomersPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PlaceholderPage title="Dashboard" />} />
            <Route path="users" element={<PlaceholderPage title="Users" />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="subscriptions" element={<PlaceholderPage title="Subscriptions" />} />
            <Route path="routes" element={<PlaceholderPage title="Routes" />} />
            <Route path="orders" element={<PlaceholderPage title="Orders" />} />
            <Route path="reviews" element={<PlaceholderPage title="Reviews" />} />
            <Route path="about" element={<PlaceholderPage title="About us" />} />
            <Route path="help" element={<PlaceholderPage title="Help" />} />
            <Route path="privacy" element={<PlaceholderPage title="Privacy policy" />} />
            <Route path="terms" element={<PlaceholderPage title="Terms and conditions" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
