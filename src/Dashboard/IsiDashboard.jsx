import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const IsiDashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedChart, setSelectedChart] = useState('Total Users');

  const visitData = {
    '2023': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2024': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2025': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  const projectsData = {
    '2023': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2024': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2025': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  const experienceData = {
    '2023': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2024': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2025': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  const achievementData = {
    '2023': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2024': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2025': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  const getData = () => {
    switch (selectedChart) {
      case 'Projects': return projectsData[selectedYear];
      case 'Experience': return experienceData[selectedYear];
      case 'Achievement': return achievementData[selectedYear];
      default: return visitData[selectedYear];
    }
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: `${selectedChart} (${selectedYear})`,
        data: getData(),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {['Total Users', 'Projects', 'Experience', 'Achievement'].map((item) => (
          <div
            key={item}
            className={`p-4 shadow rounded-md text-center cursor-pointer transition-all duration-300 
              ${selectedChart === item ? 'border-2 border-[--hitam] bg-[--ijo] text-[--putih]' : 'bg-[--putih]'}
              hover:shadow-lg hover:bg-[--hitamkurang]`}
            onClick={() => setSelectedChart(item)}
          >
            <h3 className="text-lg font-semibold">{item}</h3>
            <p className="text-2xl font-bold">
              {item === 'Total Users' ? '0' :
                item === 'Projects' ? '0' :
                  item === 'Experience' ? '0' : 
                  item === 'Achievement' ? '0' : '0'}
            </p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-[--putih] shadow-md rounded-md p-4 md:p-6 mb-6 w-full overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">{selectedChart} Data</h2>
        <div className="mb-4">
          <label className="mr-2">Select Year:</label>
          <select
            className="p-2 border rounded"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <Line data={data} />
      </div>
    </div>
  );
};

export default IsiDashboard;
