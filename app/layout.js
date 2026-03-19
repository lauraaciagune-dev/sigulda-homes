export const metadata = {
  title: "Siguldas mājas modern page",
  description:
    "Modern family homes in Sigulda, Krišjāņa Barona iela 39. 145 m², 3 bedrooms, 3 bathrooms.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="lv">
      <body>{children}</body>
    </html>
  );
}
