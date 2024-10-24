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

const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    date: "2024-01-15",
    total: 299.99,
    status: "Completed",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    date: "2024-01-14",
    total: 199.50,
    status: "Processing",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    date: "2024-01-14",
    total: 499.99,
    status: "Pending",
  },
];

export default function OrdersPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
      
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>${order.total}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "Completed"
                        ? "default"
                        : order.status === "Processing"
                        ? "secondary"
                        : "warning"
                    }
                  >
                    {order.status}
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