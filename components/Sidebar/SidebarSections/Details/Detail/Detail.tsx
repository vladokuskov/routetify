import { useAppSelector } from '@/redux/hooks'
import { TDetail } from './Detail.types'
import clsx from 'clsx'

const Detail = ({ title, subTitle, metric, last }: TDetail) => {
  const isSidebarOpen = useAppSelector(
    (state) => state.controlsReducer.isSidebarOpen,
  )

  return (
    <div
      className={clsx(
        'font-roboto w-full flex flex-row items-center justify-center gap-2 rounded-md px-1 py-1',
        !isSidebarOpen && 'flex-col',
        'max-sm:!flex-row',
      )}
    >
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <h4 className=" text-lg tracking-tighter font-bold text-neutral-800 opacity-70 break-all leading-4">
          {title}
        </h4>
        <div className="w-full flex flex-col justify-center items-center">
          <h5 className="text-base tracking-tighter leading-5 font-bold text-neutral-800 opacity-70">
            {subTitle}
          </h5>
          <p className="text-sm tracking-tighter leading-5 font-semibold text-neutral-600 opacity-60">
            {metric}
          </p>
        </div>
      </div>
      {!last && (
        <hr
          className={clsx(
            'h-full w-auto rounded-md border border-black border-opacity-20 min-h-[3.5rem]',
            !isSidebarOpen && 'h-auto !w-full min-h-0',
            'max-sm:!w-auto max-sm:!h-full max-sm:!min-h-[3.5rem]',
          )}
        />
      )}
    </div>
  )
}

export { Detail }
