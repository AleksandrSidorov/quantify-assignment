import React from 'react'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

import { togglePopover } from '../actions'

let TogglePopover = ({ dispatch }) => {
  return (
    <div>
      <MuiThemeProvider>
        <RaisedButton label="Toggle popover" onClick={() => dispatch(togglePopover())} />
      </MuiThemeProvider>
    </div>
  )
}

TogglePopover = connect()(TogglePopover)

export default TogglePopover
