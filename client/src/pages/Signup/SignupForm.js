import { useState } from 'react';
import axios from 'axios';


function SignupForm({ onCreate }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            });
            onCreate(response.data);

            alert(`Account has been created!`);
        } catch (error) {
            console.error('Error adding new user to the database', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <input type="text" id="firstName" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/><br></br>
            </p>
            <p>
                <input type="text" id="lastName" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/><br></br>
            </p>
            <p>
                <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br></br>
            </p>
            <p>
                <input type="text" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br></br>
            </p>
            <button type="submit" id="signupBtn">Create Account</button>
        </form>
    )
}

export default SignupForm;