const App = () => {

const t = [1,2,3]
const t2 = t.concat(4)
const t3 = t2.concat(5,6,7)

console.log(t,t2,t3.length)
return(
  
    <div>
      <p>
      {t3}  {t3.length}
      </p>
    </div>

  )
}
export default App
