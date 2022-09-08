import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body
  if (email === "hello@gmail.com" && password === "123") {
    res.redirect(302, '/')
  } else {
    res.status(401).json({ message: "No such user exists" })
  }
}

export default handler