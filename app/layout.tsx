import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Cuib | Cabane, apartamente, case de vacanță și multe alte cuibuiri de închiriat la munte",
  description:
    "Explorează o selecție vastă de cabane în zone montane pitorești din România. De la locuințe tradiționale la cabane moderne, Cuib oferă o varietate de opțiuni pentru toate gusturile.",
  keywords:
    "închiriat, cabană, case de vacanță, apartamente, cuib, Romania, zonă montană, vacanță ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
