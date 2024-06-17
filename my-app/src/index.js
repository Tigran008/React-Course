import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'))


const content = (
    <div>
        <a href='link'>Hello World!</a>
    </div>
)

root.render(
    <App />
)

