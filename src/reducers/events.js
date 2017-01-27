const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        {
          id: action.id,
          title: action.title,
          unread: true,
          datetime: new Date().getTime()
        },
        ...state
      ]
    case 'MARK_READED':
      return state.map(event => {
        if (event.unread) {
          event.unread = false
        }
        return event
      })
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events
