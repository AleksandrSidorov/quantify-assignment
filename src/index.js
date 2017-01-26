import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import events from './reducers'
import App from './components/App'

const initialState = [
  {
    id: 17,
    title: 'Test test test 17',
    unread: true,
    datetime: new Date().getTime(),
  },
  {
    id: 16,
    title: 'Test test test 16',
    unread: true,
    datetime: new Date().setHours((new Date()).getHours() - 2),
  },
  {
    id: 14,
    title: 'Test test test 14',
    unread: true,
    datetime: new Date().setDate((new Date()).getDate() - 1),
  },
  {
    id: 13,
    title: 'Test test test 13',
    unread: false,
    datetime: new Date().setDate((new Date()).getDate() - 3),
  },
  {
    id: 12,
    title: 'Test test test 12',
    unread: false,
    datetime: new Date().setDate((new Date()).getDate() - 8),
  },
  {
    id: 11,
    title: 'Test test test 11',
    unread: false,
    datetime: new Date().setDate((new Date()).getDate() - 31),
  },
  {
    id: 10,
    title: 'Test test test 10',
    unread: false,
    datetime: new Date().setDate((new Date()).getDate() - 160),
  }
]

let store = createStore(events, { events: initialState })

ReactDOM.render(
  <Provider store={store}>
    <App events={store.getState().events}/>
  </Provider>,
  document.getElementById('root')
);
