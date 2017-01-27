const popover = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_POPOVER':
      return !state
    default:
      return state
  }
}

export default popover
