import React from 'react'
import { connect } from 'react-redux'

import IconButton from 'material-ui/IconButton'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import Badge from 'material-ui/Badge'

import { togglePopover } from '../actions'

const badgeStyles = {
  badge: {
    padding: 0
  }
}

class BadgeComponent extends React.Component {
  render() {
    return (
      <Badge
        id="assa"
        onClick={() => this.props.dispatch(togglePopover())}
        badgeContent={this.props.unreadNumber}
        primary={true}
        style={badgeStyles.badge}
      >
        <IconButton onTouchTap={this.handleTouchTap}>
          <NotificationsIcon/>
        </IconButton>
      </Badge>
    )
  }
}

const getUnreadNumber = (events) =>
  events.reduce((pre, event) => {
    return pre + event.unread
  }, 0)


const mapStateToProps = (state) => {
  return {
    unreadNumber: getUnreadNumber(state.events)
  }
}

BadgeComponent = connect(mapStateToProps)(BadgeComponent)

export default BadgeComponent
