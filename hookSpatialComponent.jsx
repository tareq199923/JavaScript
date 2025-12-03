import { useState } from "react"

const App = () => {
const [counter , setCounter] = useState (0)

setTimeout (
  () => setCounter (counter + 1),
  10000
)

return(

  <div>

    <p> {counter} </p>

  </div>
)

}

export default App
