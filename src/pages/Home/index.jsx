import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export function HomePage() {
  const { signOut } = useContext(AuthContext)

  function handleSignOut() {
    signOut()
  }

  return (
    <>
      <h1>Você está logado</h1>
      <button onClick={handleSignOut}>Deslogar</button>
    </>
  )
}
