import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useTheme } from '../context/ThemeContext';

const Calendar = ({ className }) => {

    const dark = useTheme();
    const today = new Date();

  return (
    <div className={` lg:w-120 p-4 rounded-lg shadow-xl ${className}`}>
      <DayPicker className='text-sm lg:text-s' modifiers={{
        today: today, // Highlight today's date
      }}
      modifiersClassNames={{
        today: "bg-black rounded-full text-blue-400 font-bold", // Tailwind styles
      }} />
    </div>
  );
};

export default Calendar;
