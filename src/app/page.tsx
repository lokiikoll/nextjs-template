import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			<div>Hello</div>
			<Link href='/playground/counter'>Counter</Link>
		</main>
	);
}
