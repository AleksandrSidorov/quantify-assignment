import React from 'react'
import { connect } from 'react-redux'

import { deleteAllEvents } from '../actions'

let DeleteAllEvents = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => dispatch(deleteAllEvents())}>
        Delete all events
      </button>
    </div>
  )
}

DeleteAllEvents = connect()(DeleteAllEvents)

export default DeleteAllEvents
