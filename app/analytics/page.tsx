"use client";

import { Card } from "@/components/ui/card";
import { SalesForecasting } from "@/components/analytics/sales-forecasting";
import { CustomerRetention } from "@/components/analytics/customer-retention";
import { ProductPerformance } from "@/components/analytics/product-performance";

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Sales Forecasting</h3>
          <SalesForecasting />
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Customer Retention</h3>
          <CustomerRetention />
        </Card>
      </div>
      
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Product Performance</h3>
        <ProductPerformance />
      </Card>
    </div>
  );
}