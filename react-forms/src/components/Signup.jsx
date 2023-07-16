import SignContext from "../context/SignContext";
import { useContext } from "react";

const Signup = () => {
const {setStep} = useContext(SignContext);
  return (
    <main>
        <h3>Welcome, join us!</h3>
        <div className="card">
            <form autoComplete="off">

                    {/* Hacemos un fieldset para el nombre */}
                 <fieldset>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" autoFocus placeholder="Enter your full name" />
                <p className="error">Valid email required</p>
                </fieldset>

                {/* Hacemos un fieldset para el emaill */}
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"  placeholder="Enter your email" />
                <p className="error">Valid email required</p>
                </fieldset>

                {/* Hacemos un fieldset para el password */}
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                    <p className="error">Valid password required</p>
                </fieldset>

                {/* Hacemos un fieldset para el password */}
                <fieldset>
                    <label htmlFor="confirm">Confirm password</label>
                    <input type="password" id="confirm"/>
                    <p className="error">Required</p>
                </fieldset>

                <fieldset>
                    <label htmlFor="framework">Favorite framework</label>
                    <select name="framework" id="framework">
                        <option value="">Select your framework</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                    <p className="error">Required</p>
                </fieldset>

                <fieldset>
                    <label htmlFor="tems">
                        <input type="checkbox" id="terms"/>
                        Accept terms and conditions
                    </label>
                    <p className="error">Required</p>
                </fieldset>

                <button type="submit">
                    Register
                </button>

            </form>
        </div>
        <p>Already have an account <span onClick={()=>{setStep("signin");}}>Sign in</span></p>
    </main>
    )
}

export default Signup