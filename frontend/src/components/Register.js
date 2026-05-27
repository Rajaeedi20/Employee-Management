import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {

    const [user, setUser] = useState({

        name: '',
        email: '',
        password: ''

    });

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleChange = (e) => {

        setUser({

            ...user,
            [e.target.name]: e.target.value

        });
    };

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(

                "http://localhost:8080/api/auth/register",

                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(user)
                }
            );

            const data = await response.json();

            if (response.ok) {

                setMessage("Registration Successful");
                setMessageType("success");

                setTimeout(() => {

                    window.location.href = "/";

                }, 1000);

            } else {

                setMessage(data.message);
                setMessageType("danger");
            }

        } catch (error) {

            console.log(error);

            setMessage("Server Error");
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
                                Register
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

                            <form onSubmit={handleRegister}>

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control mb-3"
                                    placeholder="Enter Name"
                                    onChange={handleChange}
                                />

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control mb-3"
                                    placeholder="Enter Email"
                                    onChange={handleChange}
                                />

                                <input
                                    type="password"
                                    name="password"
                                    className="form-control mb-3"
                                    placeholder="Enter Password"
                                    onChange={handleChange}
                                />

                                <button
                                    className="btn btn-success w-100"
                                >
                                    Register
                                </button>

                            </form>

                            <p className="mt-3 text-center">

                                Already have account?

                                <Link to="/">
                                    Login
                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;