import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import prisma from "../../lib/prisma";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Microblog",
	description: "Share your best thoughts with the world",
};

// prisma.user.findMany()
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
