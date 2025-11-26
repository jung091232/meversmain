import Head from "next/head";
import { Layout } from "../src/components/Layout";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { useSystemOverview } from "../src/hooks/useSystemOverview";
import { formatUnits } from "viem";

export default function AdminPage() {
  const { address, isConnected } = useAccount();
  const { connectors, connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: overview, isLoading, error } = useSystemOverview();

  const isAdmin = isConnected; // TODO: restrict by owner address

  return (
    <>
      <Head>
        <title>Mevers - Admin</title>
      </Head>
      <Layout>
        <section className="panel">
          <div className="admin-header">
            <h1>Admin Dashboard</h1>
            <div className="wallet">
              {isConnected ? (
                <>
                  <span className="address">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </span>
                  <button onClick={() => disconnect()}>Disconnect</button>
                </>
              ) : (
                <button onClick={() => connect({ connector: connectors[0] })}>
                  {isPending ? "Connecting..." : "Connect Wallet"}
                </button>
              )}
            </div>
          </div>

          {!isAdmin && <p>You must connect as the owner wallet to access admin tools.</p>}

          {isAdmin && (
            <>
              <div className="cards-row">
                <div className="card">
                  <h2>Presale Status</h2>
                  {isLoading && <p>Loading...</p>}
                  {error && <p className="error">Error loading overview</p>}
                  {overview && (
                    <>
                      <p>
                        Current Round:{" "}
                        <strong>
                          {Number(overview.currentRoundIndex) + 1} / {Number(overview.roundCount)}
                        </strong>
                      </p>
                      <p>
                        Presale Ended:{" "}
                        <strong>{overview.presaleEnded ? "YES" : "NO"}</strong>
                      </p>
                      <p>
                        Presale Contract:{" "}
                        <span className="mono">
                          {overview.presale.slice(0, 6)}...{overview.presale.slice(-4)}
                        </span>
                      </p>
                    </>
                  )}
                </div>

                <div className="card">
                  <h2>ClaimHub Liquidity</h2>
                  {overview && (
                    <>
                      <p>
                        MVS:{" "}
                        <strong>
                          {Number(formatUnits(overview.claimHubMvsBalance, 18)).toLocaleString()} MVS
                        </strong>
                      </p>
                      <p>
                        USDT:{" "}
                        <strong>
                          {Number(formatUnits(overview.claimHubUsdtBalance, 6)).toLocaleString()} USDT
                        </strong>
                      </p>
                    </>
                  )}
                </div>

                <div className="card">
                  <h2>Staking Pool</h2>
                  {overview && (
                    <>
                      <p>
                        Max Reward Pool:{" "}
                        <strong>
                          {Number(formatUnits(overview.maxRewardPool, 18)).toLocaleString()} MVS
                        </strong>
                      </p>
                      <p>
                        Accrued:{" "}
                        <strong>
                          {Number(formatUnits(overview.totalRewardAccrued, 18)).toLocaleString()} MVS
                        </strong>
                      </p>
                      <p>
                        Recorded:{" "}
                        <strong>
                          {Number(formatUnits(overview.totalRewardRecorded, 18)).toLocaleString()} MVS
                        </strong>
                      </p>
                    </>
                  )}
                </div>

                <div className="card">
                  <h2>Claim Times</h2>
                  {overview && (
                    <>
                      <p>
                        Presale Claim:{" "}
                        <strong>
                          {overview.presaleClaimTime
                            ? new Date(Number(overview.presaleClaimTime) * 1000).toLocaleString()
                            : "Not set"}
                        </strong>
                      </p>
                      <p>
                        Referral Claim:{" "}
                        <strong>
                          {overview.referralClaimTime
                            ? new Date(Number(overview.referralClaimTime) * 1000).toLocaleString()
                            : "Not set"}
                        </strong>
                      </p>
                      <p>
                        Staking Claim:{" "}
                        <strong>
                          {overview.stakingClaimTime
                            ? new Date(Number(overview.stakingClaimTime) * 1000).toLocaleString()
                            : "Not set"}
                        </strong>
                      </p>
                    </>
                  )}
                </div>
              </div>
              <pre className="pre">
                {overview ? JSON.stringify(overview, null, 2) : "No data yet"}
              </pre>
            </>
          )}
        </section>
      </Layout>
    </>
  );
}
