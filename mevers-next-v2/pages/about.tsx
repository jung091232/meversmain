import Head from "next/head";
import { Layout } from "../src/components/Layout";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Mevers</title>
      </Head>
      <Layout>
        <section className="panel">
          <h1>About Mevers</h1>
          <p>
            Mevers is a meme-focused ecosystem that combines presale, staking, referral rewards
            and claim mechanics into a single on-chain experience.
          </p>

          <div className="grid">
            <div className="card">
              <h2>Vision</h2>
              <p>
                Build a sustainable meme economy where both early supporters and long-term holders
                are rewarded through transparent smart contracts.
              </p>
            </div>
            <div className="card">
              <h2>Token Utility</h2>
              <p>
                MVS is used for presale participation, staking, referral rewards, and governance
                in future ecosystem upgrades.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
