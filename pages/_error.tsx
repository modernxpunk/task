import { Box, Button, Container, Typography } from "@mui/material"
import { useRouter } from "next/router"

const Error = ({ statusCode }: any) => {
  
  const router = useRouter()

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="start" 
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          maxWidth={600}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap={1}
        >
          <Typography variant="h2" color="text.secondary">Error {statusCode}</Typography>
          <Typography variant="h6" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas consequuntur.
          </Typography>
          <Button variant="contained" onClick={() => router.push('/')}>Go to home</Button>
        </Box>
      </Box>
    </Container>
  )
}

Error.getInitialProps = ({ res, _err }: any) => ({
  statusCode: res.statusCode
})

export default Error