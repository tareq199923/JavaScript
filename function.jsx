const App = () => {
  
  // Function with two parameters that adds them together
  const functionname = (a,b) => {
    return a + b
  }

  // Function with one parameter that squares it (using return keyword)
  const functiontwo = p => {
    return p * p
  }

  // Function with one parameter that squares it (short syntax, no return keyword)
  const functionthree = t => t * t

  // Array of numbers
  const functionfour = [1,2,3,4]
  
  // Using map to square each number in the array
  // map goes through each element and applies the function c => c * c
  const squared = functionfour.map(c => c * c)
  
  // Print the squared array to console
  console.log(squared)
  

  return (
    <div>
    
    <p>
        {/* Calling functionname with 2 and 3, shows 5 */}
        Function is {functionname(2,3)}
        <br />
        
        {/* Calling functiontwo with 10, shows 100 */}
        functiontwo is {functiontwo(10)}
        <br />
        
        {/* Calling functionthree with 5, shows 25 */}
        functionthree is {functionthree(5)}
        <br />
        
        {/* Displaying the squared array with commas between numbers */}
        functionfour is {squared.join(', ')}
    </p>

    </div>
  )

}

export default App
