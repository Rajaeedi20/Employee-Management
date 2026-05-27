import React, { useState } from 'react';
import axios from 'axios';

function AddEmployee() {

    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        department: '',
        salary: ''
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(
            'http://localhost:8080/api/employees',
            employee
        );

        alert('Employee Added Successfully');
    };

    return (
        <div>
            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEmployee;