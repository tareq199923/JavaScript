const App = () => {
  // Simple object with one property
  const obj1 = {name:'tareq'}
  
  // Nested object with object inside and an array
  const obj2 = {
    name : {
      first:'jahidul',  // First name property
      last:'islam'      // Last name property
    },
    grades : [20,30,40,50]  // Array of grades     
  }
  
  // Log objects to browser console for debugging
  console.log(obj1)
  console.log(obj2)
  
  // Return JSX to display on screen
  return (
    <div>
      {/* Display simple object property */}
      <p>
        person name is {obj1.name} grades is {obj2.grades[3]}
      </p>
      
      {/* Display nested object properties with line breaks */}
      <p>
        person name {obj2.name.first} <br />
        {obj2.name.last} <br /> 
        {obj1.name}
      </p>
    </div>
  )
}

export default App
