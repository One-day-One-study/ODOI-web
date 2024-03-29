import React from 'react'
import styled from 'styled-components'
import * as icons from '@/components/common/Icon/icons'

interface IconProps {
  icon: string
  width?: number
  height?: number
  rotate?: number
}

const Icon = ({ icon, width = 24, height = 24, rotate = 0 }: IconProps) => {
  const IconComponent = icons[icon as keyof typeof icons]
  return (
    <IconWrapper width={width} height={height} rotate={rotate}>
      <IconComponent />
    </IconWrapper>
  )
}

const IconWrapper = styled.div<{
  width: number
  height: number
  rotate: number
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ rotate }) =>
    rotate && {
      transform: `rotate(${rotate}deg)`,
    }}
  >svg {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
  }
`

Icon.defaultProps = {
  width: 24,
  height: 24,
  rotate: 0,
}

export default Icon
