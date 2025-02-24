import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ 
  subsets: ["greek"],
  variable: "font",
 });

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixel",
});


export const metadata = {
  title: "Neel's Cozy Abode",
  description: "Neel Majmudar's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.variable, pixelify.variable)}>
      <body className={clsx(inter.variable, "bg-background", "text-foreground font-pixel")}>{children}</body>
    </html>
  );
}
