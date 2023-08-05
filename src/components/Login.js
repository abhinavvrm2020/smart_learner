import React, { useState , useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";
import { UserContext } from '../App';
import InputControl from "./InputControl.js";
import "./css/login.css";

const Login = () => {
    const {state,dispatch} = useContext(UserContext);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        dispatch({type:"USER",payload:true});
        setSubmitButtonDisabled(false);
        
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

    return (
        <>
            <div className="container">
                <div className="innerBox">
                    <h1 className="heading">Login</h1>
                    <InputControl
                        label="Email"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, email: event.target.value }))
                        }
                        placeholder="Enter email address"
                    />
                    <InputControl
                        label="Password"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, pass: event.target.value }))
                        }
                        placeholder="Enter Password"
                    />

                    <div className="footer">
                        <b className="error">{errorMsg}</b>
                        <button disabled={submitButtonDisabled} onClick={handleSubmission}>
                            Login
                        </button>
                        <p>
                            Already have an account?{" "}
                            <span>
                                <Link to="/signup">Sign up</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Login;