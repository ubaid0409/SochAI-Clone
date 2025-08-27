import './globals.css'
import Providers from '../redux/Providers'

export const metadata = {
  title: 'Soch AI ',
  description: 'Next.js + Tailwind + Redux + Socket.io boilerplate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
