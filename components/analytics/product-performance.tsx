"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { product: "Product A", sales: 400, profit: 240 },
  { product: "Product B", sales: 300, profit: 139 },
  { product: "Product C", sales: 200, profit: 980 },
  { product: "Product D", sales: 278, profit: 390 },
  { product: "Product E", sales: 189, profit: 480 },
];

export function ProductPerformance() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="product" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip />
        <Bar dataKey="sales" fill="hsl(var(--primary))" name="Sales" />
        <Bar dataKey="profit" fill="hsl(var(--secondary))" name="Profit" />
      </BarChart>
    </ResponsiveContainer>
  );
}