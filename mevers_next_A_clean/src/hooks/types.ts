export interface SystemOverview {
  presale: string;
  staking: string;
  claimHub: string;
  presaleEnded: boolean;
  currentRoundIndex: bigint;
  roundCount: bigint;
  presaleClaimTime: bigint;
  referralClaimTime: bigint;
  stakingClaimTime: bigint;
  tgeClaimTime: bigint;
  claimHubMvsBalance: bigint;
  claimHubUsdtBalance: bigint;
  maxRewardPool: bigint;
  totalRewardAccrued: bigint;
  totalRewardRecorded: bigint;
  stakersCount: bigint;
  timestamp: bigint;
}
