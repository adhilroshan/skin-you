import React, { useState } from 'react';
import { searchAppointments } from '../api';
import { Appointment } from '../types';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Appointment[]>([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await searchAppointments(query);
      setResults(data);
    } catch (error) {
      console.error('Error searching appointments:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search appointments..."
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>
      </form>
      <ul className="space-y-2">
        {results.map((appointment) => (
          <li key={appointment._id} className="bg-white shadow rounded-lg p-4">
            <p className="font-semibold">{appointment.name}</p>
            <p>{appointment.service}</p>
            <p className="text-sm text-gray-600">
              {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
