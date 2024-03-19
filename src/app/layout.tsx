import type { Metadata } from "next";
import "../styles/globals.scss";
import { StoreProvider } from "@/components/shared/store-provider.shared";

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
    <StoreProvider>
      <html lang="en">
        <body>
          <b>{children}</b>
        </body>
      </html>
    </StoreProvider>
  );
}
