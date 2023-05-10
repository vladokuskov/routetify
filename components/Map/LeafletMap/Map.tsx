'use-client'

import { useState } from 'react'

import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

import * as L from 'leaflet'

import GetPositionByDragging from './GetDragPosition'
import useUpdateMapView from '../../../hooks/map/updateMapView'
import useRenderRouting from '../../../hooks/map/renderRouting'
import useClickedCoords from '../../../hooks/map/updateClickedCoords'
import useRenderPolyline from '../../../hooks/map/renderPolyline'
import useRenderMarkers from '../../../hooks/map/renderMarkers'

import StyleMap from './TileLayer'
import { MapContainer } from 'react-leaflet'

import LocationMarker from './LocationMarker'
import useFitBoundsOnClick from '../../../hooks/map/fitBounds'

const LeafletMap = () => {
  const [map, setMap] = useState<L.Map | null>(null)

  useClickedCoords(map)
  useUpdateMapView(map)
  useRenderRouting(map)
  useRenderPolyline(map)
  useRenderMarkers(map)
  useFitBoundsOnClick(map)

  return (
    <>
      <MapContainer
        attributionControl={false}
        zoomControl={false}
        center={[50, 30]}
        zoom={9}
        minZoom={2}
        scrollWheelZoom={true}
        ref={setMap}
        style={{ cursor: 'crosshair' }}
      >
        <StyleMap />
        <GetPositionByDragging />
        <LocationMarker />
      </MapContainer>
    </>
  )
}

export default LeafletMap
