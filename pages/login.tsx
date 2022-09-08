import {  Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
const Form = dynamic(() => import('../components/Form'))

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Form/>
      </Box>
    </Container>
  )
}

export default Home
