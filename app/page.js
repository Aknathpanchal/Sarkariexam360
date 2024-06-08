"use client";

import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';

export default function Home() {
  const [results, setResults] = useState([]);
  const [allData, setAllData] = useState([
    { id: 1, name: 'Soccer', category: 'Sport' },
    { id: 2, name: 'Basketball', category: 'Sport' },
    { id: 3, name: 'Baseball', category: 'Sport' },
    { id: 4, name: 'Tennis', category: 'Sport' },
    { id: 5, name: 'Swimming', category: 'Sport' },
    { id: 6, name: 'Movie', category: 'Entertainment' },
    { id: 7, name: 'Concert', category: 'Entertainment' },
    { id: 8, name: 'Theater', category: 'Entertainment' },
    { id: 9, name: 'Circus', category: 'Entertainment' },
    { id: 10, name: 'Magic Show', category: 'Entertainment' },
  ]);
  const [filteredData, setFilteredData] = useState(allData);
  const categories = ['All', 'Sport', 'Entertainment'];

  useEffect(() => {
    setResults(filteredData);
  }, [filteredData]);

  const handleSearch = (query) => {
    if (query === '') {
      setResults(filteredData);
    } else {
      setResults(
        filteredData.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const handleTabChange = (category) => {
    if (category === 'All') {
      setFilteredData(allData);
    } else {
      setFilteredData(allData.filter((item) => item.category === category));
    }
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <br/>
      <Tabs categories={categories} onTabChange={handleTabChange} />
      <br/>
      <div className="mt-4">
        {results.map((item) => (
          <div key={item.id} className="border p-2 rounded mb-2">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
