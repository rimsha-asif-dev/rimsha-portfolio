import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import TransitionLayout from "./components/TransitionLayout";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rimsha Asif',
  description: 'A showcase of my work, experience, and skills',
icons:  [{ rel: "icon", url: "/logo.svg" }]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col min-h-screen"}>
        <Header />
        <main className="pt-16 flex-1 bg-white">
          <TransitionLayout>
            {children}
          </TransitionLayout>
        </main>
        <footer className="w-full py-6 flex justify-center items-center bg-[#212033] z-20 ">
          <span className="text-gray-400 text-sm text-end flex items-end gap-2">
            Designed & Developed by 
            <span className="font-semibold text-white ">Rimsha Asif</span>
            <img
              src="/developer.png"
              alt="Rimsha Asif"
              className="w-8 h-8   object-cover"
            />
          </span>
        </footer>
      </body>
    </html>
  );
} 