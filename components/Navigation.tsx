import { AppBar, Container, Toolbar, Typography, Box, Badge, Tooltip, Skeleton, Button, IconButton } from "@mui/material"
import { useEthers, useEtherBalance } from "@usedapp/core"
import { formatEther } from "ethers/lib/utils"
import { useState } from "react"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import { cropWalletAddress } from "../utils/view"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import useAuth from "./hooks/useAuth"
import LogoutIcon from '@mui/icons-material/Logout';

const Navigation = () => {

  const { setIsLogin } = useAuth()
  const { activateBrowserWallet, account, isLoading, chainId } = useEthers()
  const etherBalance = useEtherBalance(account)

  const [isClickedCopy, setIsClickedCopy] = useState<boolean>(false)
  const handleCopy = async (walletAddress: string) => {
    await navigator.clipboard.writeText(walletAddress)
    setIsClickedCopy(true)
    setTimeout(() => setIsClickedCopy(false), 2000)
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h5" fontWeight={600} flexGrow={1}>Company name</Typography>
          <Box display="flex" flexDirection="row" gap={2}>
            {account && !isLoading &&
              <Box display="flex" alignItems="center" gap={2}>
                <Badge badgeContent={chainId} color="primary" anchorOrigin={{ vertical: "top", horizontal: "left" }}>
                  <Jazzicon diameter={40} seed={jsNumberForAddress(account)} />
                </Badge>
                <Box>
                  <Tooltip
                    arrow
                    title={
                      <Box display="flex" justifyContent="center" alignItems="center" sx={{ fontSize: '.8rem' }} gap={.5}>
                        {isClickedCopy
                          ? <DoneIcon fontSize="inherit"/>
                          : <ContentCopyIcon fontSize="inherit"/>
                        }
                        <Typography fontSize="inherit">Click to copy</Typography>
                      </Box>
                    }
                  >
                    <Typography onClick={() => handleCopy(account)} sx={{ cursor: "pointer" }}>
                      {cropWalletAddress(account)}
                    </Typography>
                  </Tooltip>
                  {etherBalance === undefined
                    ? <Skeleton variant="text" sx={{ fontSize: '.8rem' }} width={60}/>
                    : <Typography fontSize=".8rem" sx={{ opacity: ".8" }}>{Number(formatEther(etherBalance)).toFixed(2)} ETH</Typography>
                  }
                </Box>
              </Box>
            }
            {!account && isLoading &&
              <Box display="flex" alignItems="center" gap={2}>
                <Skeleton variant="circular" width={40} height={40} />
                <Box>
                  <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} width={100}/>
                  <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} width={60}/>
                </Box>
              </Box>
            }
            {!account && !isLoading &&
              <Button variant="contained" onClick={activateBrowserWallet}>
                Connect wallet
              </Button>
            }
            <IconButton onClick={() => setIsLogin(false)}>
              <LogoutIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation