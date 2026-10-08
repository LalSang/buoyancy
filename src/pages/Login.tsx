import { useState } from "react";
import Input from "../components/Input";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter valid email.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        setError("");

        console.log({
            email,
            password,
        });
    }

    return (
        <main>
            <h1>Welcome back to Buoyancy</h1>

            <form onSubmit={handleSubmit}>
                <div>

                    <Input 
                        label="Email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={setEmail}
                        />
                </div>

                <div>

                    <Input 
                        label="Password"
                        id="password"
                        type="password"
                        value={password}
                        onChange={setPassword}/>
                </div>

                {error && <p>{error}</p>}

                <button type="submit">Login</button>
            </form>
        </main>
    );
}

export default Login;