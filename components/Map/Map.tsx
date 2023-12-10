'use-client'

import { useMemo } from 'react'
import MapControls from './MapControls/MapControls'
import dynamic from 'next/dynamic'
import { useAppSelector } from '@/redux/hooks'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const Map = () => {
  const isSidebarOpen = useAppSelector(
    (state) => state.controlsReducer.isSidebarOpen,
  )
  const pathname = usePathname()

  const LeafletMap = useMemo(
    () =>
      dynamic(() => import('./LeafletMap/Map'), {
        ssr: false,
      }),
    [pathname],
  )

  return (
    <section
      className={clsx(
        'h-full z-10 top-0 right-0 left-0 static',
        'max-sm:w-full max-sm:h-[70vh] fixed',
        isSidebarOpen ? 'w-[calc(100%-19.75rem)]' : 'w-[calc(100%-4rem)]',
      )}
    >
      <div className="w-full h-full relative grid bg-background dark:grid-bg-dark grid-bg">
        <MapControls />
        <LeafletMap />
      </div>
    </section>
  )
}

export { Map }
