import Head from "next/head";
import { Layout } from "../src/components/Layout";

export default function ReferralPage() {
  return (
    <>
      <Head>
        <title>Mevers - Referral</title>
      </Head>
      <Layout>
        <section className="panel">
          <h1>Referral</h1>
          <p>Track your referral performance and rewards.</p>
          <div className="card">
            {/* TODO: display referralCount, referralTotalUsd, and estimated rewards */}
            <p>Once wired, this card will show live referral stats from the presale contract.</p>
          </div>
        </section>
      </Layout>
    </>
  );
}
