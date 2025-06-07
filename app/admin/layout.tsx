import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for managing products and categories",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Admin Panel</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/admin"
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/admin/products"
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/admin/categories"
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Categories
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
} 