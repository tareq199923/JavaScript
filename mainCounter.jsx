import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 10

const root = ReactDOM.createRoot(document.getElementById("root"))

const refresh = () => {
  root.render(<App counter={counter} />)
}

setInterval(()=>{
  refresh()
  counter+=10
},1000)
