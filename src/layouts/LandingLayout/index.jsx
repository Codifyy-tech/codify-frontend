import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './style'
import { Header } from '../../pages/LandingPage/components/Header'
import { Footer } from '../../pages/LandingPage/components/Footer'
import { useEffect } from 'react'

export function LandingLayout() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: 'bd4b6d9b-c221-4e8b-84d3-a874745d244e', // The ID of this integration.
      region: 'us-south', // The region your integration is hosted in.
      serviceInstanceID: '6df44073-f6e6-49b8-9669-4f3d15ccaeb8', // The ID of your service instance.

      onLoad: function (instance) {
        instance.updateCSSVariables({
          'BASE-font-size-med': '16px',
          'BASE-line-height-med': '24px',
        })

        instance.render()
      },
    }
    const seTimeOut = setTimeout(function () {
      const t = document.createElement('script')
      t.src =
        'https://web-chat.global.assistant.watson.appdomain.cloud/versions/' +
        (window.watsonAssistantChatOptions.clientVersion || 'latest') +
        '/WatsonAssistantChatEntry.js'
      document.head.appendChild(t)
    })

    return () => clearInterval(seTimeOut)
  }, [])

  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
