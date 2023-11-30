import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Homepage',
}

export default function Home() {
  return (
    <main className='p-8'>
      <h1 className='text-3xl mb-8'>Homepage</h1>
      <nav className='flex flex-col space-y-4 my-4'>
        <Link href="/a">Go to A page</Link>
        <Link href="/b">Go to B page</Link>
      </nav>
    </main>
  )
}
