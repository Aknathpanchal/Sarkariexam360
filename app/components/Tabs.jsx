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
