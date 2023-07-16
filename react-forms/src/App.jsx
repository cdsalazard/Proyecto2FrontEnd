import { useState } from 'react'

import ForgotPassword from './components/ForgotPassword'
import Signin from './components/Signin'
import Signup from './components/Signup'
import SignContext from './context/SignContext'

function App() {
//Creamos el estado para cambiar entre paginas
const [step, setStep] = useState("signin");
  return (
    <SignContext.Provider value ={{step, setStep}}> 
    <div className="container">
      {step =="signin" && <Signin/>}
      {step =="signup" && <Signup/>}
      {step =="forgot" && <ForgotPassword/>}
    </div>
    </SignContext.Provider>
  )
}

export default App
