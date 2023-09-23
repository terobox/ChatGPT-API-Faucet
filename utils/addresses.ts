// Export faucet addresses
export const ADDRESSES = [
  {
    network: "ropsten",
    depleted: true,
    disclaimer: "Faucet drips 1 ETH, 1 wETH, and 5 NFTs (ERC721).",
    etherscanPrefix: "ropsten.etherscan.io",
    formattedName: "Ropsten",
    addresses: {
      NFTs: "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b",
      wETH: "0xc778417e063141139fce010982780140aa0cd5ab",
    },
  },
  {
    network: "kovan",
    disclaimer: "Faucet drips 1 ETH, 1 wETH, 500 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "kovan.etherscan.io",
    formattedName: "Kovan",
    addresses: {
      NFTs: "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b",
      wETH: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
      DAI: "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa",
    },
  },
  {
    network: "rinkeby",
    disclaimer: "Faucet drips 0.5 ETH, 0.5 wETH, 50 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "rinkeby.etherscan.io",
    formattedName: "Rinkeby",
    addresses: {
      NFTs: "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b",
      wETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
      DAI: "0x6A9865aDE2B6207dAAC49f8bCba9705dEB0B0e6D",
    },
  },
  {
    network: "goerli",
    disclaimer: "Faucet drips 1 ETH, 1 wETH, and 5 NFTs (ERC721).",
    etherscanPrefix: "goerli.etherscan.io",
    formattedName: "Görli",
    addresses: {
      NFTs: "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b",
      wETH: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
    },
  },
  {
    network: "kovan-optimistic",
    disclaimer: "Faucet drips 1 ETH, 1 wETH, 500 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "kovan-optimistic.etherscan.io",
    formattedName: "Optimistic Kovan",
    connectionDetails:
      "https://community.optimism.io/docs/useful-tools/networks/#optimism-kovan-testnet",
    autoconnect: {
      chainId: "0x45",
      chainName: "Optimistic Kovan",
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://kovan.optimism.io"],
      blockExplorerUrls: ["https://kovan-optimistic.etherscan.io/"],
    },
    addresses: {
      NFTs: "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b",
      wETH: "0xbc6f6b680bc61e30db47721c6d1c5cde19c1300d",
      DAI: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    },
  },
  {
    network: "mumbai",
    disclaimer:
      "Faucet drips 0.1 MATIC, 0.1 wMATIC, 500 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "mumbai.polygonscan.com",
    formattedName: "Polygon Mumbai",
    connectionDetails:
      "https://blog.pods.finance/guide-connecting-mumbai-testnet-to-your-metamask-87978071aca8",
    autoconnect: {
      chainId: "0x13881",
      chainName: "Polygon Mumbai",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
    addresses: {
      NFTs: "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b",
      wETH: "0x9c3c9283d3e44854697cd22d3faa240cfb032889",
      DAI: "0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f",
    },
  },
  {
    network: "arb-rinkeby",
    disclaimer: "Faucet drips 0.5 ETH, 0.5 wETH, 50 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "testnet.arbiscan.io",
    formattedName: "Arbitrum Rinkeby",
    connectionDetails: "https://developer.offchainlabs.com/docs/public_testnet",
    autoconnect: {
      chainId: "0x66eeb",
      chainName: "Arbitrum Testnet",
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
      blockExplorerUrls: ["https://testnet.arbiscan.io/"],
    },
    addresses: {
      NFTs: "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b",
      wETH: "0xebbc3452cc911591e4f18f3b36727df45d6bd1f9",
      DAI: "0x2f3c1b6a51a469051a22986aa0ddf98466cc8d3c",
    },
  },
  {
    network: "avalanche-fuji",
    depleted: true,
    disclaimer:
      "Faucet drips 0.1 AVAX, 0.1 wAVAX, 500 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "testnet.snowtrace.io",
    formattedName: "Avalanche Fuji",
    connectionDetails:
      "https://docs.avax.network/build/tutorials/smart-contracts/deploy-a-smart-contract-on-avalanche-using-remix-and-metamask#step-1-setting-up-metamask",
    autoconnect: {
      chainId: "0xa869",
      chainName: "Avalanche FUJI C-Chain",
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18,
      },
      rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
      blockExplorerUrls: ["https://testnet.snowtrace.io/"],
    },
    addresses: {
      NFTs: "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b",
      wETH: "0xd00ae08403b9bbb9124bb305c09058e32c39a48c",
      DAI: "0xebbc3452cc911591e4f18f3b36727df45d6bd1f9",
    },
  },
  {
    network: "moonbase-alpha",
    depleted: true,
    disclaimer: "Faucet drips 1 DEV, 1 wDEV, 500 DAI, and 5 NFTs (ERC721).",
    etherscanPrefix: "moonbase.moonscan.io",
    formattedName: "Moonbase Alpha",
    connectionDetails:
      "https://docs.moonbeam.network/learn/platform/networks/moonbase/",
    autoconnect: {
      chainId: "0x507",
      chainName: "Moonbase Alpha",
      nativeCurrency: {
        name: "Dev",
        symbol: "DEV",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
      blockExplorerUrls: ["https://moonbase.moonscan.io/"],
    },
    addresses: {
      NFTs: "0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b",
      wETH: "0xD909178CC99d318e4D46e7E66a972955859670E1",
      DAI: "0x4C153BFaD26628BdbaFECBCD160A0790b1b8F212",
    },
  },
];

/**
 * Export details about networks
 */
export function getAddressDetails() {
  // Get active networks
  const activeNetworks: string[] = ADDRESSES.filter(
    // Filter for non-depleted
    ({ depleted }) => !depleted
    // Collect just formatted name
  ).map(({ formattedName }) => formattedName);
  // Get number of active networks
  const networkCount: number = activeNetworks.length;

  // Sort addresses (depleted last)
  const sortedAddresses = ADDRESSES.sort((a, b) => {
    const first = a.depleted ?? false;
    const second = b.depleted ?? false;
    return Number(first) - Number(second);
  });

  // Return details
  return { networkCount, sortedAddresses };
}
