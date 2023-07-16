import SignContext from "../context/SignContext";
import { useContext } from "react";

const Signin = () => {
const {setStep} = useContext(SignContext);


  return (
    <main>
        <h3>Sign in</h3>
        <div className="card">
            <form autoComplete="off">
                {/* Hacemos un fieldset para el email */}
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" autoFocus placeholder="You email" />
                <p className="error">Valid email required</p>
                </fieldset>

                
                {/* Hacemos un fieldset para el emaill */}
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                    <p className="error">Valid password required</p>
                </fieldset>


                {/* Hacemos el boton para el submit del formulario */}
                <button type="submit" >Login</button>
                <div className="forgot" onClick={()=>{setStep("forgot");}}>Forgot password?</div>
            </form>
        </div>
        <p>Don't have an account?  
            <span onClick={()=>{setStep("signup");}}>
                Sign up!
            </span>
        </p>
    </main>
  );
};

export default Signin;