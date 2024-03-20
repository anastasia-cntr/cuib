import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@ui/Navbar";
import SignUpModal from "./features/authentication/SignUpModal";
import ToasterProvider from "./providers/ToasterProvider";
import LogInModal from "@features/authentication/LogInModal";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        <ToasterProvider />
        <SignUpModal />
        <LogInModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
