import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextBox from "../components/TextBox";
import Button from "../components/Button";

function SignupForm() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fnameEmpty, setFnameEmpty] = useState("");
  const [lnameEmpty, setLnameEmpty] = useState("");
  const [emailEmpty, setEmailEmpty] = useState("");
  const [passwordEmpty, setPasswordEmpty] = useState("");

  const navigate = useNavigate();

  async function onClickSignup() {
    const data = JSON.stringify({
        "firstname": fname,
        "lastname": lname,
        "email": email,
        "password": password
    })
    
    if (!validateForm()) return;

    try {
        const response = await fetch("http://localhost:3000/signup", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: data
        })

        const result = await response.json();
        console.log("Success: ", result);

        navigate("/dashboard");
    } catch (err) {
        console.error("Error: ", err)
    }
  }

  function validateForm() : boolean {
    let isValid = true; 
    
    setFnameEmpty("");
    setLnameEmpty("");
    setEmailEmpty("");
    setPassword("");

    if (isEmpty(fname)) {
        setFnameEmpty("First name is required."); 
        isValid = false;
    } 

    if (isEmpty(lname)) {
        setLnameEmpty("Last name is required."); 
        isValid = false;
    } 

    if (isEmpty(email)) {
        setEmailEmpty("Email is required."); 
        isValid = false;
    }

    if (isEmpty(password)) {
        setPasswordEmpty("Password is required."); 
        isValid = false;
    }

    return isValid;
  } 

  function isEmpty(value: string) : boolean {
    return value.length === 0;
  }

  return (
    <>
        <div className="m-[6vw] w-[40%]">
            <h1>Welcome to VerseInMind<span className="text-(--color-theme-orange)">.</span></h1>
            <h2 className="text-(--color-theme-grey) mb-[2vw]">Already have an account? <span className="text-(--color-theme-orange)"><Link to="/login">Login</Link></span></h2>
            <div className="w-full mt-[3vw]">
                <div className="grid grid-cols-2 gap-[1vw]">
                    <div>
                        <TextBox 
                            type="text"
                            value={fname}
                            placeholder="First Name"
                            customClassName="w-full"
                            onError={fnameEmpty}
                            onChange={setFirstName}
                        />
                        <p className="text-red-600 ml-[0.5vw] mt-[0.5vw]">{fnameEmpty}</p>
                    </div>
                    <div>
                        <TextBox 
                            type="text"
                            value={lname}
                            placeholder="Last Name"
                            customClassName="w-full"
                            onError={lnameEmpty}
                            onChange={setLastName}
                        />
                        <p className="text-red-600 ml-[0.5vw] mt-[0.5vw]">{lnameEmpty}</p>
                    </div>
                </div>
                <div className="mt-[1vw]">
                    <TextBox 
                        type="text"
                        value={email}
                        placeholder="Email"
                        customClassName="w-full"
                        onError={emailEmpty}
                        onChange={setEmail}
                    />
                    <p className="text-red-600 ml-[0.5vw] mt-[0.5vw]">{emailEmpty}</p>
                </div>
                <div className="mt-[1vw]">
                    <TextBox 
                        type="text"
                        value={password}
                        placeholder="Password"
                        customClassName="w-full"
                        onError={passwordEmpty}
                        onChange={setPassword}
                    />
                    <p className="text-red-600 ml-[0.5vw] mt-[0.5vw]">{passwordEmpty}</p>
                </div>
            </div>
            <Button 
                value="Create account"
                onClick={onClickSignup}
                customClassName="float-right"
            />
        </div>
    </>
  )
}

export default SignupForm

