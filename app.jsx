const App = () => {

  const t = [1,2,3]
  const t2 = t.concat(4)
  const t3 = t2.concat(5,6,7)

  console.log(t)
  console.log(t2)
  console.log(t3)

  const m1 = t3.map(value => value * 2)
  const m2 = t2.map(value => value + 4)
  const m3 = t.map(value => '<li>' + value + '</li>')

  // Destructuring
  const [first, second, ...rest] = t

  console.log(m1)
  console.log(m2)
  console.log(m3)
  console.log(first, second, rest)

  return(
    <div>
      <p>First element: {first}</p>
      <p>Second element: {second}</p>
      <p>Rest of elements: {rest.join(', ')}</p>
      <p>t3: {t3.join(', ')}</p>
      <p>m2: {m2.join(', ')}</p>
      <ul>
        {t.map(value => <li key={value}>{value}</li>)}
      </ul>
    </div>
  )
}

export default App
