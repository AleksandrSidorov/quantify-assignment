const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      console.log(state);
      console.log(action);
      let result = [
        ...state,
        {
          id: action.id,
          title: action.title,
          unread: true,
          datetime: new Date().getTime()
        }
      ]
      console.log(result);
      return result
    default:
      return state
  }
}

export default events
