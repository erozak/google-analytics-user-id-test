import Link from 'next/link';

export default function APage() {
  return (
    <main className='p-8'>
      <h1 className='text-3xl mb-8'>A Page</h1>
      <nav className='flex flex-col space-y-4 my-4'>
        <Link href="/">Go to Homepage</Link>
        <Link href="/b">Go to B page</Link>
      </nav>
    </main>
  )
}
