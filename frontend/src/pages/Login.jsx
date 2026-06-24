import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();

   const handleLogin = async () => {
    try {
        const res = await axios.post(
            "http://localhost:5000/api/auth/login",
            {
                email,
                password
            }
        );

        console.log("Login Success:", res.data);

        localStorage.setItem(
            "token",
            res.data.token
        );

        navigate("/dashboard");

    } catch (err) {
    console.log("FULL ERROR:", err);
    console.log("RESPONSE DATA:", err.response?.data);
    console.log("MESSAGE:", err.message);

    alert(err.response?.data?.message || err.message);
}
};

    return (
        <>
            <h1>Student Login</h1>

            <input
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
            Login
            </button>

            <br />
            <br />

            <Link to="/register">
                Create Account
            </Link>
            </>
    );
}

export default Login;