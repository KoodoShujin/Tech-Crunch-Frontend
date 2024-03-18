import type { Metadata } from "next";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Tech Crunch",
  description: "A copy of techcrunch by KoodoShujin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <b>{children}</b>
      </body>
    </html>
  );
}
