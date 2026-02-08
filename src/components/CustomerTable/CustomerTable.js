import React from 'react';
import { Button } from '../common/Button';
import {
  PersonIcon,
  CartIcon,
  PlusIcon,
  LightningIcon,
  MapPinIcon,
  WhatsAppIcon,
  ChevronDownIcon,
} from '../common/Icons';
import './CustomerTable.css';

function formatWallet(value) {
  return '₹ ' + Number(value).toFixed(2);
}



export function CustomerTable({ customers, searchFilter }) {
  const filtered = searchFilter
    ? customers.filter(function (c) {
        var q = searchFilter.toLowerCase();
        return (
          c.name.toLowerCase().indexOf(q) !== -1 ||
          (c.email && c.email.toLowerCase().indexOf(q) !== -1) ||
          (c.phone && c.phone.indexOf(searchFilter) !== -1)
        );
      })
    : customers;

  if (filtered.length === 0) {
    return (
      <div className="customer-table-wrap">
        <div className="customer-table__empty">No customers match your search.</div>
      </div>
    );
  }

  return (
    <div className="customer-table-wrap">
      <div className="customer-table-desktop">
        <table className="customer-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Subscriptions</th>
              <th>Wallet balance</th>
              <th>Pending orders</th>
              <th>Route area</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(function (row, index) {
              return (
                <tr key={row.id}>
                  <td>{index}</td>
                  <td>
                    <button type="button" className="customer-table__customer-cell">
                      <PersonIcon />
                      <span>{row.name}</span>
                    </button>
                  </td>
                  <td>
                    <div className="customer-table__subs">
                      <button type="button" className="customer-table__subs-btn">
                        <CartIcon />
                        Subscriptions
                      </button>
                      <button type="button" className="customer-table__subs-add" aria-label="Add subscription">
                        <PlusIcon />
                      </button>
                      <button type="button" className="customer-table__subs-lightning" aria-label="Quick action">
                        <LightningIcon />
                      </button>
                    </div>
                  </td>
                  <td>{formatWallet(row.walletBalance ?? row.wallet_balance)}</td>
                  <td>
                    <button type="button" className="customer-table__orders-pill">
                      Orders {row.pendingOrders ?? row.pending_orders}
                    </button>
                  </td>
                  <td>
                    <button type="button" className="customer-table__route-btn">
                      <MapPinIcon />
                      Update Route area
                    </button>
                  </td>
                  <td>
                    <div className="customer-table__actions">
                      <Button variant="primary">View</Button>
                      <button type="button" className="customer-table__whatsapp" aria-label="WhatsApp">
                        <WhatsAppIcon />
                      </button>
                      <button type="button" className="customer-table__actions-dropdown">
                        Actions
                        <ChevronDownIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="customer-table-cards">
        {filtered.map(function (row, index) {
          return (
            <div key={row.id} className="customer-card">
              <div className="customer-card__row">
                <span className="customer-card__label">#</span>
                <span className="customer-card__value">{index}</span>
              </div>
              <div className="customer-card__row">
                <span className="customer-card__label">Customer</span>
                <button type="button" className="customer-table__customer-cell">
                  <PersonIcon />
                  <span>{row.name}</span>
                </button>
              </div>
              <div className="customer-card__row">
                <span className="customer-card__label">Wallet balance</span>
                <span className="customer-card__value">{formatWallet(row.walletBalance)}</span>
              </div>
              <div className="customer-card__row">
                <span className="customer-card__label">Pending orders</span>
                <button type="button" className="customer-table__orders-pill">
                  Orders {row.pendingOrders}
                </button>
              </div>
              <div className="customer-card__row customer-card__row--actions">
                <div className="customer-table__actions">
                  <Button variant="primary">View</Button>
                  <button type="button" className="customer-table__whatsapp" aria-label="WhatsApp">
                    <WhatsAppIcon />
                  </button>
                  <button type="button" className="customer-table__actions-dropdown">
                    Actions
                    <ChevronDownIcon />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
