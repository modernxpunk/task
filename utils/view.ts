const cropWalletAddress = (walletAddess: string, sliceLength: number = 3) => {
  return walletAddess.slice(0, sliceLength + 2) + '...' + walletAddess.slice(-sliceLength)
}

export {
  cropWalletAddress
}