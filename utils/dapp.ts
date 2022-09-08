import { Config, Mainnet, Goerli, Ropsten, Rinkeby, Kovan } from "@usedapp/core"
import { getDefaultProvider } from "ethers"

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
    [Ropsten.chainId]: getDefaultProvider('ropsten'),
    [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
    [Kovan.chainId]: getDefaultProvider('kovan'),
  },
}

export {
  config
}