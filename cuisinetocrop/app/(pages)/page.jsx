"use client";
import React, { useState } from 'react';

const Homepage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Implement search functionality here
        console.log('Search query:', searchQuery);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to CuisineToCrop</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search for recipes or ingredients..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ padding: '10px', width: '300px' }}
                />
                <button type="submit" style={{ padding: '10px' }}>Search</button>
            </form>
        </div>
    );
};

export default Homepage;