import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(

                "http://localhost:8080/api/auth/login",

                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                localStorage.setItem(
                    "user",
                    JSON.stringify(data)
                );

                setMessage("Login Successful");
                setMessageType("success");

                setTimeout(() => {

                    window.location.href = "/dashboard";

                }, 1000);

            } else {

                setMessage(data.message);
                setMessageType("danger");
            }

        } catch (error) {

            console.log(error);

            setMessage("Invalid Credentials");
            setMessageType("danger");
        }
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Login page
                            </h2>

                            {
                                message && (

                                    <div
                                        className={`alert alert-${messageType}`}
                                    >
                                        {message}
                                    </div>
                                )
                            }

                            <form onSubmit={handleLogin}>

                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    placeholder="Enter Email"
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />

                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Enter Password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                                <button
                                    className="btn btn-primary w-100"
                                >
                                    Login
                                </button>

                            </form>

                            <p className="mt-3 text-center">

                                Don't have account?

                                <Link to="/register">
                                    Create Account
                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;