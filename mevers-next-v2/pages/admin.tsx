import Head from "next/head";
import { Layout } from "../src/components/Layout";

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Mevers Admin Dashboard</title>
      </Head>
      <Layout>
        <section className="panel">
          <h1>Admin Dashboard</h1>
          <p>
            This page is reserved for the owner wallet and will be wired to admin contracts
            (ClaimHub, Presale, Staking) to manage claim times, reward pools and monitoring.
          </p>

          <div className="grid-2">
            <div className="card">
              <h2>System Overview</h2>
              <ul className="stat-list">
                <li>Presale Status: Active</li>
                <li>Current Round: 2 / 10</li>
                <li>ClaimHub MVS: 0</li>
                <li>ClaimHub USDT: 0</li>
              </ul>
            </div>
            <div className="card">
              <h2>Admin Actions</h2>
              <ul className="action-list">
                <li>Set Claim Times</li>
                <li>Adjust Reward Pool</li>
                <li>Withdraw / Fund ClaimHub</li>
                <li>Manual Round Switch</li>
              </ul>
              <p className="hint">
                Later these will be buttons calling the admin smart contracts.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
