import Head from "next/head";
import { Layout } from "../src/components/Layout";
import { useReadContract, useAccount, useConnect, useDisconnect } from "wagmi";
import { PRESALE_ADDRESS, PRESALE_ABI } from "../src/contracts/presale";
import { formatUnits } from "viem";

export default function PresalePage() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const { data: roundIndex } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "currentRoundIndex"
  });

  const { data: roundCount } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "getRoundCount"
  });

  const { data: roundData } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "getRound",
    args:[roundIndex ?? 0n]
  });

  const price = roundData ? Number(formatUnits(roundData[0],6)) : 0;
  const tokensAvail = roundData ? Number(formatUnits(roundData[1],18)) : 0;

  return (
    <Layout>
      <Head><title>MVS Presale</title></Head>

      <section className="panel">
        <h1>MVS Presale</h1>
        <p>Join the Mevers meme ecosystem presale and secure allocation.</p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Presale Status</h2>
          <ul>
            <li>Round: {roundIndex !== undefined ? Number(roundIndex)+1 : "-"} / {roundCount?Number(roundCount):"-"}</li>
            <li>Price: ${price.toFixed(4)} per MVS</li>
            <li>Tokens Available: {tokensAvail.toLocaleString()} MVS</li>
          </ul>
        </div>

        <div className="card">
          <h2>Buy MVS</h2>
          {!isConnected ? (
            <button onClick={()=>connect({connector:connectors[0]})} className="btn">Connect Wallet</button>
          ):(
            <>
              <p>Wallet: {address?.slice(0,6)}...{address?.slice(-4)}</p>
              <button className="btn">Buy Tokens (TODO)</button>
              <button className="btn" onClick={()=>disconnect()}>Disconnect</button>
            </>
          )}
        </div>
      </section>

      <section className="panel">
        <h2>💸 Invite & Earn Big Rewards</h2>
        <p>There’s a powerful referral system — up to $500,000 in rewards.</p>
        <p>Share your link, grow the community, earn in MVS.</p>
        <button className="btn" onClick={()=>location.href="/referral"}>🚀 Go to Referral Page</button>
      </section>
    </Layout>
  );
}
