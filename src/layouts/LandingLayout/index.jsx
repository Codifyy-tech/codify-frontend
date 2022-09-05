import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './style'
import { Header } from '../../pages/LandingPage/components/Header'
import { Footer } from '../../pages/LandingPage/components/Footer'

export function LandingLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
