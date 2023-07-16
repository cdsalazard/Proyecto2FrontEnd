import SignContext from "../context/SignContext";
import { useContext } from "react";

const ForgotPassword = () => {
const {setStep} = useContext(SignContext);
  return (
    <main>
        <h3>Forgot Passwword?</h3>
        <div className="card">
            <form autoComplete="off">
                {/* Hacemos un fieldset para el emaill */}
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" autoFocus placeholder="You email" />
                    <p className="error">Valid email required</p>
                </fieldset>
            <button type="submit">Remember me</button>
            </form>
        </div>
        <p>Already have an account <span onClick={() => {setStep("signin")}}>Sign in</span></p>
    </main>
    )
}

export default ForgotPassword