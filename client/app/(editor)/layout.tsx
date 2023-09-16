import { StoreProvider } from '@/providers/StoreProvider'
import 'leaflet/dist/leaflet.css'
import { Toaster } from '@/components/Toaster/Toaster'
import { siteConfig } from '@/config/site'

export const metadata = { title: `${siteConfig.name} - Editor` }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Toaster />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
