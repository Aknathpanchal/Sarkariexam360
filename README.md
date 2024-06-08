Sure! Here’s a README.md file that explains how to set up and run the project, along with an overview of the functionality:

markdown
Copy code
# Real-Time Search and Tab Filtration Application

This project is a web application built using Next.js and Tailwind CSS that demonstrates real-time search and tab filtration functionalities. The application is styled to be responsive and modern, based on a Figma design.

## Features

- **Real-Time Search**: The search bar fetches and displays search results in real-time as the user types.
- **Tab Filtration**: Tabs filter the displayed content based on the selected category.

## Technologies Used

- **Next.js**: For building the React application with server-side rendering and static site generation.
- **Tailwind CSS**: For styling the application with a utility-first CSS framework.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or Yarn (v1.22 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/real-time-search-tab-filtration.git
   cd real-time-search-tab-filtration
Install dependencies:

Using npm:

bash
Copy code
npm install
Using Yarn:

bash
Copy code
yarn install
Configure Tailwind CSS:

Tailwind CSS is already configured in this project. Ensure that tailwind.config.js and globals.css are correctly set up:

tailwind.config.js:

javascript
Copy code
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
./styles/globals.css:

css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
Running the Application
Start the development server:

Using npm:

bash
Copy code
npm run dev
Using Yarn:

bash
Copy code
yarn dev
Open your browser and navigate to:

arduino
Copy code
http://localhost:3000
Project Structure
components/: Contains the reusable UI components.

SearchBar.jsx: The search bar component for real-time search.
Tabs.jsx: The tab component for category filtration.
controllers/: Contains the business logic and data handling functions.

dataController.js: Handles data fetching, filtering, and searching.
pages/: Contains the Next.js pages.

index.js: The main page that integrates the search and tab components.
Mock Data
The mock data is defined in the dataController.js file and contains 10 items with different names belonging to either the "Sport" or "Entertainment" categories.

javascript
Copy code
const data = [
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
];
Components
SearchBar.jsx

jsx
Copy code
import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 rounded w-full"
      placeholder="Search..."
    />
  );
};

export default SearchBar;
Tabs.jsx

jsx
Copy code
import { useState } from 'react';

const Tabs = ({ categories, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const handleTabClick = (category) => {
    setActiveTab(category);
    onTabChange(category);
  };

  return (
    <div className="flex space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleTabClick(category)}
          className={`p-2 ${
            activeTab === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } rounded`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
Contributing
Feel free to open issues or submit pull requests if you have any suggestions or improvements.

License
This project is licensed under the MIT License.

arduino
Copy code

This `README.md` provides clear instructions on setting up, running, and understanding the project. Feel free to adjust any part of it to better fit your project specifics.








