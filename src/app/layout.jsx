import Header from "./hooks/header";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Footer from "./components/footer";

export const metadata = {
  title: "Mohamed Dahani",
  description:
    "Hi, I'm Mohamed Dahani, a passionate web developer dedicated to creating and implementing innovative web solutions. Skilled in programming, troubleshooting, and collaborating with cross-functional teams to ensure the success of high-impact projects.",
};

const linearGradient = `bg-gradient-to-r from-cyan-500 to-blue-500 h-screen`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} ${linearGradient}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
