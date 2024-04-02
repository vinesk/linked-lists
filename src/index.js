import './index.css'
const { default: header } = require('./header')

const app = document.querySelector('#app')
app.appendChild(header())
