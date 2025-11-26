import Head from "next/head";
import { Layout } from "../src/components/Layout";

export default function ClaimPage() {
  return (
    <>
      <Head>
        <title>Mevers Claim Center</title>
      </Head>
      <Layout>
        <section className="panel">
          <h1>Claim Center</h1>
          <p>
            Unified claim hub for all MVS rewards: presale allocations, referral rewards and
            staking rewards.
          </p>

          <div className="grid-3">
            <div className="card">
              <h2>Presale Claim</h2>
              <p>Unclaimed Presale MVS: 0</p>
              <button className="btn btn-primary">Claim Presale</button>
            </div>
            <div className="card">
              <h2>Referral Claim</h2>
              <p>Unclaimed Referral: 0 USDT + 0 MVS</p>
              <button className="btn btn-primary">Claim Referral</button>
            </div>
            <div className="card">
              <h2>Staking Claim</h2>
              <p>Unclaimed Staking Rewards: 0 MVS</p>
              <button className="btn btn-primary">Claim Staking</button>
            </div>
          </div>

          <p className="hint">
            These buttons will later call the corresponding functions on the MvsClaimHub contract.
          </p>
        </section>
      </Layout>
    </>
  );
}
