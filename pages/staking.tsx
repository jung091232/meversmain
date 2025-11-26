import Head from "next/head";
import { Layout } from "../src/components/Layout";

export default function StakingPage() {
  return (
    <>
      <Head>
        <title>Mevers - Staking</title>
      </Head>
      <Layout>
        <section className="panel">
          <h1>Staking</h1>
          <p>Stake your MVS for 30 / 90 / 180 days and earn rewards.</p>

          <div className="grid-2">
            <div className="card">
              <h2>Create Stake</h2>
              {/* TODO: plan selector, amount input, stake() call */}
              <p>Here users will choose lock period and stake amount.</p>
            </div>
            <div className="card">
              <h2>My Stakes</h2>
              {/* TODO: list stakes from contract, allow principal and reward claim */}
              <p>Existing stakes and claim options will be shown here.</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
