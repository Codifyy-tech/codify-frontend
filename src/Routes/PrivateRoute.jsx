import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export const PrivateRoute = () => {
  const { signed, isFetching } = useContext(AuthContext)

  if (isFetching) return 'Carregando'

  return signed ? <Outlet /> : <Navigate to="/login" />
}
