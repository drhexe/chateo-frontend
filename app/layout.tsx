import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], preload: true });

export const metadata: Metadata = {
    title: 'Chateo!',
    description: 'Your everyday chatting app..',
    icons: ['logo.svg'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="h-[100dvh] w-[375px]">{children}</main>
            </body>
        </html>
    );
}
