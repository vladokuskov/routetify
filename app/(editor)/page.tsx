'use client'

import { Map } from '@/components/Map/Map'
import { Sidebar } from '@/components/Sidebar/Sidebar'

export default function Editor() {
  return (
    <main className="bg-background w-full h-full max-h-full flex items-start justify-start">
      <Sidebar />
      <Map />
    </main>
  )
}
