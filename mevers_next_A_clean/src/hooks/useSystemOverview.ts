import { useReadContract } from "wagmi";
import { ADMIN_VIEW_CONTRACT_ADDRESS, ADMIN_VIEW_ABI } from "./contracts";
import { SystemOverview } from "./types";

export function useSystemOverview() {
  const result = useReadContract({
    address: ADMIN_VIEW_CONTRACT_ADDRESS as `0x${string}`,
    abi: ADMIN_VIEW_ABI as any,
    functionName: "getSystemOverview",
    query: { staleTime: 5000 },
  });

  const data = result.data as any[] | undefined;

  const parsed: SystemOverview | undefined = data
    ? {
        presale: data[0] as string,
        staking: data[1] as string,
        claimHub: data[2] as string,
        presaleEnded: data[3] as boolean,
        currentRoundIndex: data[4] as bigint,
        roundCount: data[5] as bigint,
        presaleClaimTime: data[6] as bigint,
        referralClaimTime: data[7] as bigint,
        stakingClaimTime: data[8] as bigint,
        tgeClaimTime: data[9] as bigint,
        claimHubMvsBalance: data[10] as bigint,
        claimHubUsdtBalance: data[11] as bigint,
        maxRewardPool: data[12] as bigint,
        totalRewardAccrued: data[13] as bigint,
        totalRewardRecorded: data[14] as bigint,
        stakersCount: data[15] as bigint,
        timestamp: data[16] as bigint,
      }
    : undefined;

  return { ...result, data: parsed };
}
