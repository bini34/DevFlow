import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import {Inter, Space_Grotesk} from 'next/font/google'
import { text } from "stream/consumers";
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})
const space_Grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})
export const metadata: Metadata = {
  title: "DevFlow",
  description: "A commity-driven platform for asking and answering programming questions. Get help, share knowledge, and collabrate with developers from around the world. Explore topics in web development, alogoithms, data structures, and more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      elements: {
        formButtonPrimary: 'primary-gradient',
        footerActionLink: 
        'primary-text-gradient hover:text-primary-500',
      }
    }}
    >
    <html lang="en">
      <body
      className={`${inter.variable} ${space_Grotesk.variable}`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
