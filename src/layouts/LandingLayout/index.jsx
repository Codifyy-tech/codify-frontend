import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './style'
import { Header } from '../../pages/LandingPage/components/Header'

export function LandingLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
