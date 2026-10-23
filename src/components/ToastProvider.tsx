'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 4000,
        style: {
          background: '#0F172A',
          color: '#F8FAFC',
          borderRadius: '12px',
          border: '1px solid #1E293B',
          padding: '14px 18px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: 'inherit',
        },
        success: {
          duration: 3500,
          iconTheme: {
            primary: '#10B981',
            secondary: '#FFFFFF',
          },
          style: {
            borderLeft: '4px solid #10B981',
          },
        },
        error: {
          duration: 4500,
          iconTheme: {
            primary: '#EF4444',
            secondary: '#FFFFFF',
          },
          style: {
            borderLeft: '4px solid #EF4444',
          },
        },
        loading: {
          style: {
            borderLeft: '4px solid #F59E0B',
          },
        },
      }}
    />
  );
}
