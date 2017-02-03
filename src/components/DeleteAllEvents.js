import React from 'react'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

import { deleteAllEvents } from '../actions'

let DeleteAllEvents = ({ dispatch }) => {
  return (
    <div>
      <MuiThemeProvider>
        <RaisedButton label="Delete all events" onClick={() => dispatch(deleteAllEvents())} />
      </MuiThemeProvider>
    </div>
  )
}

DeleteAllEvents = connect()(DeleteAllEvents)

export default DeleteAllEvents
