import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const WavePieChart = ({ data, className, title, dataKey, chartClass, dataClass }) => {
  // Generate colors dynamically or use your own set of colors
  const COLORS = ["#059669", "#2563eb", "#f97316", "#ef4444", "#4b5563", "#d1d5db", "#10b981", "#3b82f6", "#9333ea", "#f59e0b"];

  return (
    <div className={` rounded-lg text-center ${className} flex flex-col justify-center items-center md:flex-row md:justify-evenly`}>
      {/* Title */}

      <div className="h-[75%] md:h-[80%]">
        <h3 className="text-sm font-bold mb-4 font-Josefin ">{title}</h3>

        {/* Responsive Pie Chart Container */}
        <div className="w-full h-full">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey={dataKey}
                nameKey="name"
                outerRadius="80%"
                fill={chartClass}
                // label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>


      {/* Legend Section */}
      <div className="mt-14 md:w-[50%] flex justify-center items-start">
        
        <div className="flex flex-wrap justify-center items-center  md:justify-start gap-4">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-4 h-4 mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length], borderRadius: '50%' }}
              />
              <span className="text-xxs md:text-xs lg:text-sm font-medium">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WavePieChart;
