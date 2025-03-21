import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data, title }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <ResponsiveContainer width="100%" height="70%">
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#000000" />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default Chart;
