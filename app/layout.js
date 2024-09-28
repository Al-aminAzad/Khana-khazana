import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

import { dbConnect } from "@/services/mongo";
import AuthProvider from "./providers/AuthProvider";

export const metadata = {
  title: "Khana-khazana",
  description: "Khana-khazana is nothing",
};

export default async function RootLayout({ children }) {
  await dbConnect()
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
