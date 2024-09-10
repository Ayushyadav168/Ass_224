import React from 'react';

const TabButton = ({ label, isActive, onClick }) => (
    <button
        className={`bg-gray-700 text-white py-1 px-3 rounded-full ${isActive ? 'bg-gray-600' : ''}`}
        onClick={onClick}
    >
        {label}
    </button>
);

export default TabButton;
