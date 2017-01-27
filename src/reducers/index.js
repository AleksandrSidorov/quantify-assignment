import { combineReducers } from 'redux'

import events from './events'
import popover from './popover'


const eventsApp = combineReducers({
  events,
  popover
})

export default eventsApp
