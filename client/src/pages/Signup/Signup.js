import { Link } from "react-router-dom"; 

import SignupForm from './SignupForm.js'

function Signup({ onCreate }) {
    return (
        <>
        <h1>Welcome to VerseInMind<span>.</span></h1>
        <h3>Already have an account? <Link to="/login">Log In</Link></h3>
        
        <SignupForm onCreate={onCreate}/>
        </>
    )
}

export default Signup;