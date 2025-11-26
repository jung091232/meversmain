import Head from "next/head";
import { Layout } from "../src/components/Layout";

export default function PresalePage() {
  return (
    <>
      <Head>
        <title>Mevers - Presale</title>
      </Head>
      <Layout>
        <section className="panel">
          <h1>Presale</h1>
          <p>Buy MVS during the presale and optionally attach a referral address.</p>

          <div className="grid-2">
            <div className="card">
              <h2>Current Round</h2>
              <p>Price, remaining tokens and round index will be loaded from the presale contract.</p>
              {/* TODO: hook up to PRESALE_CONTRACT using wagmi useReadContract */}
            </div>

            <div className="card">
              <h2>Buy MVS</h2>
              {/* TODO: wallet connect + amount input + buyWithUsdt() call */}
              <p>This form will allow users to buy MVS with USDT.</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
