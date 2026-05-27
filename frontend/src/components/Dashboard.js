import React from 'react';
import Navbar from '../components/Navbar';

function Dashboard() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (

        <div>

            <Navbar />

            <div className="container mt-5">

                <div className="card shadow p-5">

                    <h1>
                        Welcome {user?.name}
                    </h1>

                    <p>
                        Employee Management Dashboard
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;