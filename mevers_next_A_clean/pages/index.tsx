import Head from "next/head";
import Link from "next/link";
import { Layout } from "../src/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mevers - Home</title>
      </Head>
      <Layout>
        <section className="hero">
          <div className="hero-content">
            <h1>Mevers Meme Ecosystem</h1>
            <p>
              Explore the Mevers presale, staking, referral and claim system powered
              by smart contracts.
            </p>
            <div className="hero-actions">
              <Link href="/presale" className="btn-primary">
                Join Presale
              </Link>
              <Link href="/staking" className="btn-secondary">
                Stake MVS
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
