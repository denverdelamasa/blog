'use client';

import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function AppLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for hydration
    const timeout = setTimeout(() => setLoading(false), 1000); // 1 second fake load
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}