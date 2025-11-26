import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="logo">Mevers</div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/presale">Presale</Link>
          <Link href="/staking">Staking</Link>
          <Link href="/referral">Referral</Link>
          <Link href="/claim">Claim</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </header>
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Mevers. All rights reserved.</p>
      </footer>
    </div>
  );
}
