import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { LandingLayout } from '../layouts/LandingLayout'
import { AboutPage } from '../pages/AboutPage'
import { CoursePage } from '../pages/CoursePage'
import { HomePage } from '../pages/HomePage'

import { LandingPage } from '../pages/LandingPage'
import { Player } from '../pages/Player'
import { ProfilePage } from '../pages/ProfilePage'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { TestPage } from '../pages/TestPage'
import { TechTest } from '../pages/TechTest'
import { TheoryTest } from '../pages/TheoryTest'
import { PrivateRoute } from './PrivateRoute'
import { PracticalTest } from '../pages/PracticalTest'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { DashboardPage } from '../pages/DashboardPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="sobre" element={<AboutPage />} />
      </Route>

      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="/home" element={<PrivateRoute />}>
        <Route path="" element={<DefaultLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="course" element={<CoursePage />} />

          <Route path="profile" element={<ProfilePage />} />
          <Route path="test" element={<TestPage />} />
        </Route>

        <Route path="course/:id" element={<Player />} />
        <Route path="test/:id" element={<TechTest />} />
        <Route path="test/theorytest/:id" element={<TheoryTest />} />
        <Route path="test/practicaltest/:id" element={<PracticalTest />} />
      </Route>

      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="" element={<DashboardLayout />}>
          <Route path="" element={<DashboardPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
