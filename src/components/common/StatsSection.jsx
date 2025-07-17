import React from 'react';
import './StatsSection.css';
import { FaStore, FaDollarSign, FaShoppingBag, FaMoneyBillWave } from 'react-icons/fa';

const stats = [
    {
        id: 1,
        icon: <FaStore />,
        value: '10.5k',
        label: 'Sellers active on our site',
    },
    {
        id: 2,
        icon: <FaDollarSign />,
        value: '33k',
        label: 'Monthly Product Sales',
    },
    {
        id: 3,
        icon: <FaShoppingBag />,
        value: '10.5k',
        label: 'Customers active on our site',
    },
    {
        id: 4,
        icon: <FaMoneyBillWave />,
        value: '3 Lakh',
        label: 'Annual gross sales on our site',
    },
];

const StatsSection = () => {
    return (
        <div className="stats-container">
            {stats.map(({ id, icon, value, label }) => (
                <div key={id} className="stat-card">
                    <div className="icon-wrapper">{icon}</div>
                    <h3>{value}</h3>
                    <p>{label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsSection;
