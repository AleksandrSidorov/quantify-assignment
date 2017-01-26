import React, { PropTypes } from 'react'

const EventList = ({ events }) => (
  <ul>
    {events.map(event =>
      <li key={event.id}>
        {event.title} - {event.unread.toString()} - {event.datetime.toLocaleString()}
      </li>
    )}
  </ul>
)

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    unread: PropTypes.bool.isRequired,
    datetime: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default EventList
