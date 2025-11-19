import { useState } from "react";
import TextBox from "./TextBox";

function SignupForm() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
        <div className="m-[6vw]">
            <h1>Welcome to VerseInMind<span className="text-(--color-theme-orange)">.</span></h1>
            <h2 className="text-(--color-theme-grey) mb-[2vw]">Already have an account? <span className="text-(--color-theme-orange)">Login</span></h2>
            <div className="w-[40vw] mt-[3vw]">
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
        </div>
    </>
  )
}

export default SignupForm

