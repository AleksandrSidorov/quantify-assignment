import React from 'react'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

import { markReadedEvents } from '../actions'

let MarkReaded = ({ dispatch }) => {
  return (
    <div>
      <MuiThemeProvider>
        <RaisedButton label="Mark all events readed" onClick={() => dispatch(markReadedEvents())} />
      </MuiThemeProvider>
    </div>
  )
}

MarkReaded = connect()(MarkReaded)

export default MarkReaded
