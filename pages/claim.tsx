import Head from "next/head";
import { Layout } from "../src/components/Layout";

export default function ClaimPage() {
  return (
    <>
      <Head>
        <title>Mevers - Claim</title>
      </Head>
      <Layout>
        <section className="panel">
          <h1>Claim Center</h1>
          <p>Claim all your Mevers ecosystem rewards from a single place.</p>

          <div className="grid-3">
            <div className="card">
              <h2>Presale Claim</h2>
              {/* TODO: read presaleMvs from ClaimHub and call claimPresaleMvs() */}
              <p>Unclaimed presale MVS will appear here.</p>
            </div>
            <div className="card">
              <h2>Referral Claim</h2>
              {/* TODO: read referralUsdt/referralMvs and call claimReferral() */}
              <p>Unclaimed referral rewards will appear here.</p>
            </div>
            <div className="card">
              <h2>Staking Claim</h2>
              {/* TODO: read stakingMvs and claimStaking()/recordReward() flow */}
              <p>Unclaimed staking rewards will appear here.</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
