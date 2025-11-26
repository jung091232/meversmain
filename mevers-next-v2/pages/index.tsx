import Head from "next/head";
import Link from "next/link";
import { Layout } from "../src/components/Layout";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Mevers | Meme Ecosystem</title>
      </Head>
      <Layout>
        <section className="hero">
          <div className="hero-content">
            <h1>Mevers Meme Ecosystem</h1>
            <p>
              Presale, staking, referral and claim – all in one on-chain meme infrastructure.
            </p>
            <div className="hero-actions">
              <Link href="/presale" className="btn btn-primary">
                Join Presale
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="grid">
          <div className="card">
            <h2>Presale</h2>
            <p>Round-based presale with dynamic pricing and referral tracking.</p>
            <Link href="/presale" className="link">
              Go to Presale →
            </Link>
          </div>
          <div className="card">
            <h2>Staking</h2>
            <p>Lock your MVS in 30 / 90 / 180 day pools and earn rewards.</p>
            <Link href="/staking" className="link">
              View Staking →
            </Link>
          </div>
          <div className="card">
            <h2>Referral</h2>
            <p>Multi-level referral rewards integrated with the presale.</p>
            <Link href="/referral" className="link">
              Referral Dashboard →
            </Link>
          </div>
          <div className="card">
            <h2>Claim Center</h2>
            <p>Claim presale, referral and staking rewards from one place.</p>
            <Link href="/claim" className="link">
              Open Claim Center →
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
