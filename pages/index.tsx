import { Box, Container, Typography } from "@mui/material"
import type { NextPage } from "next"
import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"))

const Home: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Container maxWidth="lg" disableGutters>
        <Box
          display="flex"
          alignItems="center"
          minHeight="100vh"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            maxWidth={600}
            gap={1}
          >
            <Typography variant="h2" color="text.secondary">
              Welcome
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint, magni et unde nihil praesentium a eos aliquam hic laudantium provident.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default Home
