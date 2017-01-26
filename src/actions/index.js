let nextEvent = 20

export const addEvent = (title) => {
  return {
    type: 'ADD_EVENT',
    id: nextEvent++,
    title,
  }
}
