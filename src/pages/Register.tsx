import { useState } from "react";
import { supabase } from "../lib/supabase";
import Input from "../components/Input";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (username.length < 3) {
            setError("Username length is too short and must at least 3 characters.");
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters")
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const { error } = await supabase.auth.signUp( {
            email,
            password,
            options: {
                data: {
                    username,
                }
            }
        });

        if (error) {
            setError(error.message);
            return;
        }

        setError("");

        console.log("Account created");
    }

    return (
        <main>
            <h1>Create your Buoyancy account</h1>

            <form onSubmit={handleSubmit}>
                <div>

                    <Input 
                        label="Username"
                        id="username"
                        type="text"
                        value={username}
                        onChange={setUsername}
                        />
                </div>

                <div>
                    <label htmlFor="Email">Email</label>

                    <Input 
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={setEmail}
                     />
                </div>

                <div>
                    <label htmlFor="password">Password</label>

                    <Input 
                        id="password"
                        type="password"
                        label="Password"
                        value={password}
                        onChange={setPassword}
                        />
                </div>

                <div>

                    <Input 
                        label="Confirm Password"
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={setConfirmPassword} />
                </div>

                {error && <p>{error}</p>}

                <button type="submit">Create Account</button>
            </form>
        </main>
    );
}

export default Register;