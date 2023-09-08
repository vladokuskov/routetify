import clsx from 'clsx'
import React from 'react'

type Icon = {
  svg: React.FC<React.SVGProps<SVGSVGElement>>
  width?: string
  height?: string
  className?: string
  spin?: Boolean
}

const Icon: React.FC<Icon> = ({
  svg: Icon,
  width = '24',
  height = '24',
  className = '',
  spin = false,
}) => {
  return (
    <span
      className={clsx(
        'flex items-center justify-center',
        spin === true && 'animate-spin',
        className,
      )}
    >
      <Icon width={width} height={height} />
    </span>
  )
}

export default Icon
