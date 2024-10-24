"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  activity: Math.floor(Math.random() * 100),
}));

export function CustomerActivity() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="hour"
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `${value}:00`}
        />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="activity"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}