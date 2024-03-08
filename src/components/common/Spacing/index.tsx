import React from 'react'

const Spacing = ({ size }: { size: number }) => (
  <div
    style={{
      width: '100%',
      height: `${size}px`,
      backgroundColor: `transparent`,
    }}
  />
)

export default Spacing
