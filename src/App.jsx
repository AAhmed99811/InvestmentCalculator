import Header from "./components/Header/Header"
import Results from "./components/Results/Results"
import UserInput from "./components/UserInput/UserInput"
import { useState } from "react"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputValid && <p className="center">Please Enter A Duration Greater Than Zero. </p>}
      {inputValid && <Results input={userInput} />}
    </>
  )
}

export default App
