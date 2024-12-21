// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "HansInnoverse Hackathon",
//   description: "Organised by Ordinateur",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="bg-black relative">
//         <div className="absolute inset-0 bg-cover bg-custom-image bg-fixed opacity-20"></div>
//         <div className="relative z-10"> {children}</div>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HansInnoverse Hackathon",
  description: "Organised by Ordinateur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
