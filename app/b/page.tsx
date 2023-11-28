import Link from 'next/link';

export default function BPage() {
  return (
    <main className='p-8'>
      <h1 className='text-3xl mb-8'>B Page</h1>
      <nav className='flex flex-col space-y-4 my-4'>
        <Link href="/">Go to Homepage</Link>
        <Link href="/a">Go to A page</Link>
      </nav>
    </main>
  )
}
