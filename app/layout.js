import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
});

export const metadata = {
    title: "One for All Foundation",
    description: "Celebrate the elderly",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={geist.className}>
        <body>
        <div className="main-content">
            {children}
        </div>
        </body>
        </html>
    );
}