import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { PropsWithChildren, ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Gym App',
	description: 'List of exercises for the gym',
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
