import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import Badge from 'material-ui/Badge'


import AddEvent from './AddEvent'
import MarkReaded from './MarkReaded'
import DeleteAllEvents from './DeleteAllEvents'
import TogglePopover from './TogglePopover'
import PopoverComponent from './PopoverComponent'

const badgeStyles = {
  badge: {
    padding: 0
  }
}

injectTapEventPlugin()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openPopover: false
    }
  }


  handleTouchTap = (event) => {
    event.preventDefault()

    this.setState({
      openPopover: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({
      openPopover: false
    })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Toolbar>
            <ToolbarTitle text="Quantify the World" />
            <Badge id="assa" badgeContent={4} primary={true} style={badgeStyles.badge}>
              <IconButton onTouchTap={this.handleTouchTap}>
                <NotificationsIcon/>
              </IconButton>
            </Badge>
            <PopoverComponent />
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
