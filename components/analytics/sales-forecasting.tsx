"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", actual: 4000, forecast: 4400 },
  { month: "Feb", actual: 3000, forecast: 3300 },
  { month: "Mar", actual: 2000, forecast: 2200 },
  { month: "Apr", actual: 2780, forecast: 2900 },
  { month: "May", actual: 1890, forecast: 2100 },
  { month: "Jun", actual: 2390, forecast: 2500 },
];

export function SalesForecasting() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          name="Actual Sales"
        />
        <Line
          type="monotone"
          dataKey="forecast"
          stroke="hsl(var(--secondary))"
          strokeWidth={2}
          name="Forecast"
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}