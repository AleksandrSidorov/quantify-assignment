import React, { PropTypes } from 'react'
import moment from 'moment'

import { List, ListItem } from 'material-ui/List'

import ShowAll from './ShowAll'

const toRecent = (date) => {
  moment.locale('ru')
  return moment(date).fromNow()
}

const EventList = ({ events }) => (
  <List>
    {events.map(event =>
      <ListItem
        key={event.id}
        primaryText={event.title}
        secondaryText={toRecent(event.datetime)}
      />
    )}
    <ListItem>
      <ShowAll />
    </ListItem>
  </List>
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
