import { Link } from "react-router-dom"; 

function Signup() {
    return (
        <>
        <h1>Welcome to VerseInMind<span>.</span></h1>
        <h3>Already have an account? <Link to="/login">Log In</Link></h3>
        
        </>
    )
}

export default Signup;