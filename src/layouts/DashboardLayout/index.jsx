// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'

import { LayoutContainer } from './styles'

export function DashboardLayout() {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  )
}
