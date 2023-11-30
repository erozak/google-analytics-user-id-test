import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page B',
}

export default function BPage() {
  return (
    <main className='p-8'>
      <h1 className='text-3xl mb-8'>Page B</h1>
      <nav className='flex flex-col space-y-4 my-4'>
        <Link href="/">Go to Homepage</Link>
        <Link href="/a">Go to page A</Link>
      </nav>
    </main>
  )
}
