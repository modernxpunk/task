import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const useAuth = () => {
  const router = useRouter()

  const [isLogin, setIsLogin] = useState<any>(() => {
    return typeof window !== "undefined" ? localStorage.getItem('isLogin') === "true" : false
  })

  useEffect(() => {
    localStorage.setItem('isLogin', isLogin)
    router.push(isLogin ? '/' : '/login')
  }, [isLogin])

  return { isLogin, setIsLogin }

}

export default useAuth