import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export const PrivateRoute = () => {
  const { signed, isFetching } = useContext(AuthContext)

  if (isFetching) return 'Carregando'
  console.log(signed)

  return signed ? <Outlet /> : <Navigate to="/login" />
}
