import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clean existing data
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.customer.deleteMany();

  // Create products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: "Product A",
        price: 299.99,
        stock: 45,
        category: "Electronics",
        status: "In Stock",
      },
    }),
    prisma.product.create({
      data: {
        name: "Product B",
        price: 199.50,
        stock: 5,
        category: "Accessories",
        status: "Low Stock",
      },
    }),
    prisma.product.create({
      data: {
        name: "Product C",
        price: 499.99,
        stock: 0,
        category: "Electronics",
        status: "Out of Stock",
      },
    }),
  ]);

  // Create customers
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: "John Doe",
        email: "john@example.com",
        status: "Loyal",
      },
    }),
    prisma.customer.create({
      data: {
        name: "Jane Smith",
        email: "jane@example.com",
        status: "Regular",
      },
    }),
    prisma.customer.create({
      data: {
        name: "Bob Johnson",
        email: "bob@example.com",
        status: "New",
      },
    }),
  ]);

  // Create orders
  const orders = await Promise.all([
    prisma.order.create({
      data: {
        customerId: customers[0].id,
        total: 299.99,
        status: "Completed",
        items: {
          create: [
            {
              productId: products[0].id,
              quantity: 1,
              price: products[0].price,
            },
          ],
        },
      },
    }),
    prisma.order.create({
      data: {
        customerId: customers[1].id,
        total: 199.50,
        status: "Processing",
        items: {
          create: [
            {
              productId: products[1].id,
              quantity: 1,
              price: products[1].price,
            },
          ],
        },
      },
    }),
    prisma.order.create({
      data: {
        customerId: customers[2].id,
        total: 499.99,
        status: "Pending",
        items: {
          create: [
            {
              productId: products[2].id,
              quantity: 1,
              price: products[2].price,
            },
          ],
        },
      },
    }),
  ]);

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });