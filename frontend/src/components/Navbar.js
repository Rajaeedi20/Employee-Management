import React from 'react';

function Navbar() {

    const logout = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    };

    return (

        <nav className="navbar navbar-dark bg-dark px-3">

            <h3 className="text-white">
                Employee Dashboard
            </h3>

            <button
                className="btn btn-danger"
                onClick={logout}
            >
                Logout
            </button>

        </nav>
    );
}

export default Navbar;