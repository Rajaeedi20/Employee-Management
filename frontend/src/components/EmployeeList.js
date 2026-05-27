import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await axios.get(
            'http://localhost:8080/api/employees'
        );

        setEmployees(response.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete(
            `http://localhost:8080/api/employees/${id}`
        );

        fetchEmployees();
    };

    return (
        <div>
            <h2>Employee List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.department}</td>
                                <td>{emp.salary}</td>

                                <td>
                                    <button
                                        onClick={() => deleteEmployee(emp.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;