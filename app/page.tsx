import { Card } from "@/components/ui/card";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { PopularProducts } from "@/components/popular-products";
import { CustomerActivity } from "@/components/customer-activity";

export default function Home() {
  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-sm font-medium">Total Revenue</h3>
          <div className="mt-2 text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium">Total Customers</h3>
          <div className="mt-2 text-2xl font-bold">2,350</div>
          <p className="text-xs text-muted-foreground">+180 this month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium">Products in Stock</h3>
          <div className="mt-2 text-2xl font-bold">584</div>
          <p className="text-xs text-muted-foreground">48 low stock alerts</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium">Average Order Value</h3>
          <div className="mt-2 text-2xl font-bold">$189.44</div>
          <p className="text-xs text-muted-foreground">+7% from last week</p>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 p-6">
          <h3 className="text-lg font-medium mb-4">Overview</h3>
          <Overview />
        </Card>
        <Card className="col-span-3 p-6">
          <h3 className="text-lg font-medium mb-4">Recent Sales</h3>
          <RecentSales />
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Popular Products</h3>
          <PopularProducts />
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Customer Activity by Hour</h3>
          <CustomerActivity />
        </Card>
      </div>
    </div>
  );
}