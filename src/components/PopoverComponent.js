import React from 'react'
import { connect } from 'react-redux'

import Popover from 'material-ui/Popover'

import VisibleEventList from './VisibleEventList'
import { togglePopover } from '../actions'


class PopoverComponent extends React.Component {
  render () {
    this.anchorEl = document.getElementById('assa')
    return (
      <Popover
        open={this.props.openPopover}
        anchorEl={this.anchorEl}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        onRequestClose={() => this.props.dispatch(togglePopover())}
        >
          Assa
          <VisibleEventList />
        </Popover>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    openPopover: state.popover
  }
}



PopoverComponent = connect(mapStateToProps)(PopoverComponent)

export default PopoverComponent
