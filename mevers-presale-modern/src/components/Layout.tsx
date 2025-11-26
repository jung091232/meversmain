import Link from "next/link";
import { ReactNode } from "react";

export function Layout({ children }:{children:ReactNode}) {
  return (
    <div className="root">
      <header className="nav">
        <div className="logo">Mevers</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/presale">Presale</Link>
          <Link href="/referral">Referral</Link>
          <Link href="/claim">Claim</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
