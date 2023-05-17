import "./globals.css";
import "./styles.sass";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VIM",
  description:
    "Vim es una empresa dedicada al suministro e instalacion de vidrio, aluminio y PVC para el sector residencial en Mexico.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
