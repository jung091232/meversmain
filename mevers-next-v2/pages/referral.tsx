import Head from "next/head";
import { Layout } from "../src/components/Layout";

export default function ReferralPage() {
  return (
    <>
      <Head>
        <title>Mevers Referral</title>
      </Head>
      <Layout>
        <section className="panel">
          <h1>Referral</h1>
          <p>
            This page is aligned with the presale + referral contract: tracking qualified referrals,
            volume and reward tiers.
          </p>

          <div className="grid-2">
            <div className="card">
              <h2>My Referral Code</h2>
              <p>Your wallet address will be used as your referral code.</p>
              <div className="ref-code-box">0xYourAddressHere...</div>
              <p className="hint">
                This will be generated dynamically from the connected wallet.
              </p>
            </div>

            <div className="card">
              <h2>Referral Performance</h2>
              <ul className="stat-list">
                <li>Qualified Referrals: 0</li>
                <li>Total Referred Volume: 0 USDT</li>
                <li>Estimated Rewards: 0 USDT + 0 MVS</li>
              </ul>
              <p className="hint">
                Later we will load this data from the presale referral contract.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
