import { redirect } from 'next/navigation';

// For some Next.js 15/Vercel deployments, the absence of a root page.tsx 
// causes Vercel Edge caching to throw a 404 NOT_FOUND instantly without executing middleware.
// This fallback explicitly declares the '/' route and redirects to the default locale.
export default function RootPage() {
  redirect('/es');
}
