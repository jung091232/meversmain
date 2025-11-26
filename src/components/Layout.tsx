import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mvs-app">
      <header className="mvs-header">
        <div className="mvs-logo">Mevers</div>
        <nav className="mvs-nav">
          <Link href="/">Home</Link>
          <Link href="/presale">Presale</Link>
          <Link href="/staking">Staking</Link>
          <Link href="/referral">Referral</Link>
          <Link href="/claim">Claim</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </header>
      <main className="mvs-main">{children}</main>
      <footer className="mvs-footer">
        <p>© {new Date().getFullYear()} Mevers. All rights reserved.</p>
      </footer>
    </div>
  );
}
