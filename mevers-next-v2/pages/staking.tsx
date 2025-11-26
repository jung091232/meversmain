import Head from "next/head";
import { Layout } from "../src/components/Layout";

export default function StakingPage() {
  return (
    <>
      <Head>
        <title>Mevers Staking</title>
      </Head>
      <Layout>
        <section className="panel">
          <h1>Staking</h1>
          <p>
            Three lock periods (30 / 90 / 180 days) with APR-based rewards. This page matches the
            MvsStaking smart contract structure.
          </p>

          <div className="grid-2">
            <div className="card">
              <h2>Create Stake</h2>
              <div className="form">
                <label>Lock Period</label>
                <select>
                  <option>30 days</option>
                  <option>90 days</option>
                  <option>180 days</option>
                </select>
                <label>MVS Amount</label>
                <input type="number" placeholder="Enter amount to stake" />
                <button className="btn btn-primary">Connect Wallet &amp; Stake</button>
              </div>
              <p className="hint">
                Later this will call the <code>stake</code> function on the staking contract.
              </p>
            </div>

            <div className="card">
              <h2>My Stakes</h2>
              <p>
                This area will list all of the user&apos;s stakes with principal and reward claim
                buttons, matching the smart contract data.
              </p>
              <ul className="stat-list">
                <li>Active Stakes: 0</li>
                <li>Total Staked: 0 MVS</li>
                <li>Pending Rewards: 0 MVS</li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
