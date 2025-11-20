import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';



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
      
        <main className="pt-16 flex-1 bg-white">
        
            {children}
         
        </main>
     
         
        
      </body>
    </html>
  );
} 