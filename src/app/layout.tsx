import { ReactNode } from 'react';

// A minimal root layout is required by Next.js if a root page.tsx exists.
// The actual app logic, styles, and i18n providers are inside [locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
