import React, { useState } from "react";
import { fetchRegister } from "../frontendApi/api";

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log(username);
            console.log(password);
            const register = await fetchRegister(username, password);
            if (register.success) {
                console.log(register);
            }
            localStorage.setItem("token", register.token);
            setUsername("");
            setPassword("");
        } catch (error) {
            console.error(error);
        }
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
    };
    return (
        <>
            <form onSubmit={handleRegister}>
                <div>
                    <h1 className="header">
                        Sign up
                    </h1>
                    <label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Username*"
                            maxLength="30"
                            required
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                    </label>


                    <label>
                        <input
                            className="input"
                            type="password"
                            placeholder="Password*"
                            maxLength="30"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </label>

                    <button className="button">
                        Register
                    </button>
                </div>
                {/* <div className=" absolute top-0 left-0 w-full bg-[#0000003a]"></div>
                <video
                    className="w-full h-full object-cover"
                    src={videoBg}
                    autoPlay
                    loop
                    muted
                /> */}
            </form>
        </>
    );
}

export default Register;