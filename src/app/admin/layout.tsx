import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#eef2f7' }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: '2rem' }}>
        {children}
      </div>
    </div>
  );
}
