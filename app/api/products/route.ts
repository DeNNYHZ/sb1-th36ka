import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    name: "Product A",
    price: 299.99,
    stock: 45,
    category: "Electronics",
    status: "In Stock",
  },
  {
    id: 2,
    name: "Product B",
    price: 199.50,
    stock: 5,
    category: "Accessories",
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Product C",
    price: 499.99,
    stock: 0,
    category: "Electronics",
    status: "Out of Stock",
  },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newProduct = { ...body, id: products.length + 1 };
  products.push(newProduct);
  return NextResponse.json(newProduct);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, ...data } = body;
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...data };
    return NextResponse.json(products[index]);
  }
  return NextResponse.json({ error: 'Product not found' }, { status: 404 });
}