import Head from "next/head";
import { Layout } from "../src/components/Layout";

export default function PresalePage() {
  return (
    <>
      <Head>
        <title>Mevers Presale</title>
      </Head>
      <Layout>
        <section className="panel">
          <h1>Presale</h1>
          <p>
            This page is structured around the MVS presale smart contract: rounds, pricing,
            raised amount and referral-based rewards.
          </p>

          <div className="grid-2">
            <div className="card">
              <h2>Current Round</h2>
              <ul className="stat-list">
                <li>Round: #2 / 10</li>
                <li>Price: 0.007 USDT per MVS</li>
                <li>Remaining: 145,000,000 MVS</li>
              </ul>
              <p className="hint">
                Later we will connect this box to the on-chain presale contract to show live data.
              </p>
            </div>

            <div className="card">
              <h2>Buy MVS</h2>
              <div className="form">
                <label>USDT Amount</label>
                <input type="number" placeholder="Enter amount in USDT" />
                <label>Referral Address (optional)</label>
                <input type="text" placeholder="0x..." />
                <button className="btn btn-primary">Connect Wallet &amp; Buy</button>
              </div>
              <p className="hint">
                This form will later call the <code>buyWithUsdt</code> function on the presale contract.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
