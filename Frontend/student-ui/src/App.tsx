import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import DocxGenerator from './docxGenerator'
import StudentCrud from './StudentCrud'
import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Student Dashboard</h1>
          <p>
            Manage students with the CRUD interface below and generate DOCX reports from the frontend.
          </p>
        </div>
      </section>

      <div className="ticks"></div>
      <StudentCrud />

      <div className="ticks"></div>
      <DocxGenerator />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
