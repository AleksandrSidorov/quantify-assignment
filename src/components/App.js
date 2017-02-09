import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'

import BadgeComponent from './BadgeComponent'
import PopoverComponent from './PopoverComponent'
import AddEvent from './AddEvent'
import MarkReaded from './MarkReaded'
import DeleteAllEvents from './DeleteAllEvents'
import TogglePopover from './TogglePopover'

injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="Quantify the World" />
            </ToolbarGroup>
            <ToolbarGroup>
              <BadgeComponent />
              <PopoverComponent />
            </ToolbarGroup>
          </Toolbar>
        </MuiThemeProvider>
        <AddEvent />
        <MarkReaded />
        <DeleteAllEvents />
        <TogglePopover />
      </div>
    )
  }
}

export default App
