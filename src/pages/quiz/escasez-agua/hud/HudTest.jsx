import React from 'react'
import EndLevel from './EndLevel'

const HudTest = ({endLevel}) => {
  return (
    <div>
    {endLevel && (
      <EndLevel />
    )}
  </div>
  )
}

export default HudTest