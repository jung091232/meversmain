import { Abi } from "viem";

export const PRESALE_ADDRESS = "0xB12890806921F35D226c1c19DBB0A883EF6151a0";

export const PRESALE_ABI = [
  {
    type:"function",
    name:"currentRoundIndex",
    stateMutability:"view",
    inputs,
    outputs{type:"uint256"}]
  },
  {
    type:"function",
    name:"getRoundCount",
    stateMutability:"view",
    inputs,
    outputs{type:"uint256"}]
  },
  {
    type:"function",
    name:"getRound",
    stateMutability:"view",
    inputs{name:"index",type:"uint256"}],
    outputs
      {name:"priceUsdPerMvs",type:"uint256"},
      {name:"tokensAvailable",type:"uint256"},
      {name:"isActive",type:"bool"}
    ]
  }
];
