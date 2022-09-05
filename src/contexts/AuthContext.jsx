import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('@Auth:token')

    async function getUserData() {
      try {
        const { data } = await api.get('/checktoken', {
          headers: { Authorization: 'Bearer ' + token },
        })
        setUser(data)
      } catch (e) {
        localStorage.clear()
      } finally {
        setIsFetching(false)
      }
    }

    if (!token) {
      setIsFetching(false)
    }

    if (token) {
      getUserData()
    }
  }, [])

  const signIn = async (inputData) => {
    try {
      setIsLoading(true)
      const { data } = await api.post('/auth', {
        email: inputData.email,
        password: inputData.password,
      })

      api.defaults.headers.common.Authorization = `Bearer ${data.token}`
      setUser(data.data)
      localStorage.setItem('@Auth:token', data.token)
    } catch (e) {
      console.log('ERRO', e)
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (inputData) => {
    try {
      setIsLoading(true)
      const { data } = await api.post('/user/professional/register', inputData)

      setUser(data.data)
      localStorage.setItem('@Auth:token', data.token)
      navigate('/dashboard')
    } catch (e) {
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
        signUp,
        signOut,
        isFetching,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
