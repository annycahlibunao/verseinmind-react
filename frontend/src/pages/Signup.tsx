import { useState } from "react";
import TextBox from "../components/TextBox";
import Button from "../components/Button";

function SignupForm() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onClickSignup() {
    const data = JSON.stringify({
        "firstname": fname,
        "lastname": lname,
        "email": email,
        "password": password
    })

    try {
        const response = await fetch("http://localhost:3000/signup", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: data
        })

        const result = await response.json();
        console.log("Success: ", result);
    } catch (err) {
        console.error("Error: ", err)
    }
  }

  return (
    <>
        <div className="m-[6vw] w-[40%]">
            <h1>Welcome to VerseInMind<span className="text-(--color-theme-orange)">.</span></h1>
            <h2 className="text-(--color-theme-grey) mb-[2vw]">Already have an account? <span className="text-(--color-theme-orange)">Login</span></h2>
            <div className="w-full mt-[3vw]">
                <div className="grid grid-cols-2 gap-[1vw]">
                    <TextBox 
                        type="text"
                        value={fname}
                        onChange={setFirstName}
                        placeholder="First Name"
                        customClassName="w-full"
                    />
                    <TextBox 
                        type="text"
                        value={lname}
                        onChange={setLastName}
                        placeholder="Last Name"
                        customClassName="w-full"
                    />
                </div>
                <div className="mt-[1vw]">
                    <TextBox 
                        type="text"
                        value={email}
                        onChange={setEmail}
                        placeholder="Email"
                        customClassName="w-full"
                    />
                </div>
                <div className="mt-[1vw]">
                    <TextBox 
                        type="text"
                        value={password}
                        onChange={setPassword}
                        placeholder="Password"
                        customClassName="w-full"
                    />
                </div>
            </div>
            <Button 
                value="Create account"
                path="/dashboard"
                onClick={onClickSignup}
                customClassName="float-right"
            />
        </div>
    </>
  )
}

export default SignupForm

