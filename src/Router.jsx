import { Route, Routes } from 'react-router-dom'
import { LandingLayout } from './layouts/LandingLayout'

import { LandingPage } from './pages/LandingPage'
import { SignIn } from './pages/SignIn'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route path="/login" element={<SignIn />} />
    </Routes>
  )
}
