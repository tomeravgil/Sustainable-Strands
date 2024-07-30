// src/app/page.tsx
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Ensure the router is ready befo re pushing
    router.push('/Home');
  }, [router]);

  return null; // or a loading spinner, or any other placeholder
}
