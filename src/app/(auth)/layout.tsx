import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticação - Livraria",
  description: "Login e Registro - Livraria",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
