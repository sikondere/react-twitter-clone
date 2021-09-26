import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './components/App'
import reducer from './reducers'
import middleware from './middleware'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer, middleware);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))

