import axios from 'axios'
import { useEffect, useState } from 'react'

interface Student {
  id?: string
  name: string
  email: string
  age: number
}

const API_URL = 'http://127.0.0.1:8081/api/students'

export default function StudentCrud() {

  const [students, setStudents] = useState<Student[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadStudents()
  }, [])

  const loadStudents = async () => {

    setLoading(true)
    setError('')

    try {

      const response = await axios.get<Student[]>(API_URL)

      console.log("GET RESPONSE:", response.data)

      setStudents(response.data)

    } catch (err: any) {

      console.log("LOAD ERROR:", err)

      setError('Unable to load students.')

    } finally {

      setLoading(false)

    }
  }

  const resetForm = () => {

    setName('')
    setEmail('')
    setAge('')

  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault()

    setError('')

    if (!name.trim() || !email.trim() || !age.trim()) {

      setError('All fields are required.')

      return

    }

    const student = {

      name: name.trim(),
      email: email.trim(),
      age: parseInt(age)

    }

    console.log("POST DATA:", student)

    setSaving(true)

    try {

      const response = await axios.post<Student>(
        API_URL,
        student,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      console.log("SAVE RESPONSE:", response.data)

      resetForm()

      await loadStudents()

    } catch (err: any) {

      console.log("SAVE ERROR:", err)

      console.log("ERROR RESPONSE:", err.response)

      console.log("ERROR DATA:", err.response?.data)

      setError(
        err.response?.data?.message ||
        'Unable to save student.'
      )

    } finally {

      setSaving(false)

    }
  }

  const handleDelete = async (id: string | undefined) => {

    if (!id) return

    try {

      await axios.delete(`${API_URL}/${id}`)

      await loadStudents()

    } catch (err) {

      setError('Unable to delete student.')

    }
  }

  return (
    <div className="container mt-5">

      <h2>Student CRUD</h2>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="mb-3">

          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>

        <div className="mb-3">

          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div className="mb-3">

          <input
            type="number"
            className="form-control"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Add Student'}
        </button>

      </form>

      <hr />

      {loading ? (

        <p>Loading...</p>

      ) : (

        <table className="table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (

              <tr key={student.id}>

                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>

                <td>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  )
}