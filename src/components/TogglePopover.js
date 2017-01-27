import React from 'react'
import { connect } from 'react-redux'

import { togglePopover } from '../actions'

let TogglePopover = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => dispatch(togglePopover())}>
        Toggle popover
      </button>
    </div>
  )
}

TogglePopover = connect()(TogglePopover)

export default TogglePopover
