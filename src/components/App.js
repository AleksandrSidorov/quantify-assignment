import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import Badge from 'material-ui/Badge'
import Popover from 'material-ui/Popover'

import VisibleEventList from './VisibleEventList'
import AddEvent from './AddEvent'

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
            <Badge badgeContent={4} primary={true} style={badgeStyles.badge}>
              <IconButton onTouchTap={this.handleTouchTap}>
                <NotificationsIcon/>
              </IconButton>
            </Badge>
            <Popover
              open={this.state.openPopover}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              onRequestClose={this.handleRequestClose}
              >
                Assa
              </Popover>
            </Toolbar>
          </MuiThemeProvider>
          <AddEvent />
          <VisibleEventList />
      </div>
    )
  }
}

export default App
