let nextEvent = 20

export const addEvent = (title) => {
  return {
    type: 'ADD_EVENT',
    id: nextEvent++,
    title,
  }
}

export const markReadedEvents = () => {
  return {
    type: 'MARK_READED'
  }
}

export const deleteAllEvents = () => {
  return {
    type: 'DELETE_ALL_EVENTS'
  }
}

export const togglePopover = () => {
  return {
    type: 'TOGGLE_POPOVER'
  }
}
