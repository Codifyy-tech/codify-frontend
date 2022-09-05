import { Route, Routes } from 'react-router-dom'
import { LandingLayout } from '../layouts/LandingLayout'
import { HomePage } from '../pages/Home'

import { LandingPage } from '../pages/LandingPage'
import { SignIn } from '../pages/SignIn'
import { PrivateRoute } from './PrivateRoute'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="/home" element={<PrivateRoute />}>
        <Route path="" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
