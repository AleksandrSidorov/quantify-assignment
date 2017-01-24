import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar'

injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Toolbar>
          <ToolbarTitle text="Quantify the World" />
        </Toolbar>
      </MuiThemeProvider>
    )
  }
}

export default App
