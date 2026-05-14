// src/app/layout.tsx — Showcase skeleton
// Full implementation: github.com/ofoxai/ofox-docs

import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
