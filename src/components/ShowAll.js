import React from 'react'
import { connect } from 'react-redux'

import { togglePopover } from '../actions'

let ShowAll = ({ dispatch }) => {
  return (
    <a href="#"
      onClick={(event) => {
        event.preventDefault()
        dispatch(togglePopover())
      }}
    >
      Show all
    </a>
  )
}

ShowAll = connect()(ShowAll)

export default ShowAll
