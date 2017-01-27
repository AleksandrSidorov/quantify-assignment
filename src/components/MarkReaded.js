import React from 'react'
import { connect } from 'react-redux'

import { markReadedEvents } from '../actions'

let MarkReaded = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => dispatch(markReadedEvents())}>
        Mark all events readed
      </button>
    </div>
  )
}

MarkReaded = connect()(MarkReaded)

export default MarkReaded
