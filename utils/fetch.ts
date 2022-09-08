import axios from "axios"

const login = async (inputs: any) => {
  await axios.post('/api/auth', inputs)
}

export {
  login
}