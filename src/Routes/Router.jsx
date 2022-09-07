import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { LandingLayout } from '../layouts/LandingLayout'
import { CoursePage } from '../pages/CoursePage'
import { HomePage } from '../pages/HomePage'

import { LandingPage } from '../pages/LandingPage'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { PrivateRoute } from './PrivateRoute'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="/home" element={<PrivateRoute />}>
        <Route path="" element={<DefaultLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="course" element={<CoursePage />} />
        </Route>
      </Route>
    </Routes>
  )
}
