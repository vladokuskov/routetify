import { useAppSelector } from '@/redux/hooks'
import clsx from 'clsx'
import { Contributors } from '../Contributors/Contributors'
import { MapControlDeleteRoute } from './DeleteRoute/MapControlDelete'
import { MapControlDrawSelection } from './DrawSelection/MapControlDraw'
import { MapControlFindLocation } from './FindLocation/MapControlLocation'
import { MapControlFitRoute } from './FitRoute/MapControlFit'
import { MapControlRedoAction } from './RedoAction/MapControlRedo'
import { MapControlTileSelection } from './TilesSelector/MapControlTileSelection'
import { MapControlUndoAction } from './UndoAction/MapControlUndo'
import { MapControlReverseRoute } from './ReverseRoute/MapControlReverseRoute'
import { MapControlZoom } from './Zoom/MapControlZoom'

const MapControls = () => {
  const map = useAppSelector((state) => state.controlsReducer.map)

  return (
    <div className="absolute min-w-full min-h-full w-full f-full pointer-events-none z-[1003]">
      {map && (
        <div className="min-w-full min-h-full w-full h-full pointer-events-none]">
          <Contributors />
          <MapControlZoom />
          <div
            className={clsx(
              'absolute flex flex-col items-center justify-start top-7 py-2 px-3 pr-0 pointer-events-auto right-2',
              'max-sm:right-3 max-hsm:!top-1',
            )}
          >
            <section
              className={clsx(
                'flex flex-col items-center justify-start gap-4',
                'max-hsm:!flex-row max-hsm:!flex-wrap',
              )}
            >
              <MapControlUndoAction />
              <MapControlRedoAction />
              <MapControlDeleteRoute />
              <MapControlFitRoute />
              <MapControlFindLocation />
              <MapControlDrawSelection />
              <MapControlReverseRoute />
              <MapControlTileSelection />
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default MapControls
