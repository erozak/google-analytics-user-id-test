import { cookies } from 'next/headers';
import { GoogleTagManager } from '@/components/google-tag-manager';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const trackingIdCookie = cookies().get('tid');

  return (
    <html lang="en">
      <GoogleTagManager containerId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CONTAINER_ID} userId={trackingIdCookie?.value} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
