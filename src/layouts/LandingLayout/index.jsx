import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './style'
import { Header } from '../../pages/LandingPage/components/Header'
import { Footer } from '../../pages/LandingPage/components/Footer'
import { WebChatContainer } from '@ibm-watson/assistant-web-chat-react'

export function LandingLayout() {
  const webChatOptions = {
    integrationID: 'bd4b6d9b-c221-4e8b-84d3-a874745d244e',
    region: 'us-south',
    serviceInstanceID: '6df44073-f6e6-49b8-9669-4f3d15ccaeb8',
  }

  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <WebChatContainer config={webChatOptions} />
      <Footer />
    </LayoutContainer>
  )
}
