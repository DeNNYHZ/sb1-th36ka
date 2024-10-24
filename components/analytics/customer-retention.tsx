"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", newCustomers: 100, returning: 120 },
  { month: "Feb", newCustomers: 80, returning: 140 },
  { month: "Mar", newCustomers: 90, returning: 160 },
  { month: "Apr", newCustomers: 70, returning: 180 },
  { month: "May", newCustomers: 110, returning: 190 },
  { month: "Jun", newCustomers: 95, returning: 200 },
];

export function CustomerRetention() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip />
        <Bar dataKey="newCustomers" fill="hsl(var(--primary))" name="New Customers" />
        <Bar dataKey="returning" fill="hsl(var(--secondary))" name="Returning Customers" />
      </BarChart>
    </ResponsiveContainer>
  );
}