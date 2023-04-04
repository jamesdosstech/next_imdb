import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* header */}
        <Header />
        {/* navbar */}
        {/* searchbox */}
        {children}
      </body>
    </html>
  );
}
