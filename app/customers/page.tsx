"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    orders: 15,
    totalSpent: 2499.99,
    status: "Loyal",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    orders: 8,
    totalSpent: 1299.50,
    status: "Regular",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    orders: 3,
    totalSpent: 499.99,
    status: "New",
  },
];

export default function CustomersPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
      
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>${customer.totalSpent}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      customer.status === "Loyal"
                        ? "default"
                        : customer.status === "Regular"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}