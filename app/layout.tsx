import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const font = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Cuib | Cabane, apartamente, case de vacanță și multe alte cuibuiri de închiriat la munte",
  description:
    "Explorează o selecție vastă de cabane în zone montane pitorești din România. De la locuințe tradiționale la cabane moderne, Cuib oferă o varietate de opțiuni pentru toate gusturile.",
  keywords:
    "închiriat, cabană, case de vacanță, apartamente, cuib, Romania, zonă montană, vacanță ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
