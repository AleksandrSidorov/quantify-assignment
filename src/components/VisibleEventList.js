import { connect } from 'react-redux'
import EventList from './EventList'

// Get only several last events
const getVisibleEvents = (events, end = 5) => {
  return events.slice(0, end)
}

const mapStateToProps = (state) => {
  return {
    events: getVisibleEvents(state.events)
  }
}

const VisibleEventList = connect(mapStateToProps)(EventList)

export default VisibleEventList
