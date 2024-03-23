import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NabBar";
import { Container } from "@mui/material";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Dragon News",
  description: "A News trusted news portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <Container className="min-h-screen">
        {children}
        </Container>
        <Footer/>
        </body>
    </html>
  );
}
