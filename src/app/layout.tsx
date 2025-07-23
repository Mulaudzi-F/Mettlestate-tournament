import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-gray-900 text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
