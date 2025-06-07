import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard 
          title="Products" 
          description="Manage your product inventory" 
          count="View All"
          link="/admin/products"
        />
        <DashboardCard 
          title="Categories" 
          description="Manage product categories" 
          count="View All"
          link="/admin/categories"
        />
      </div>
    </div>
  );
}

function DashboardCard({ 
  title, 
  description, 
  count, 
  link 
}: { 
  title: string; 
  description: string; 
  count: string; 
  link: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        href={link}
        className="text-blue-600 hover:underline font-medium"
      >
        {count} →
      </Link>
    </div>
  );
}
