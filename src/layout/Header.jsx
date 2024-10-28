import { Link } from "react-router-dom"
export default function Header() {
  return (
    <>
      <header className="container-fluid bg-primary text-white p-1">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container m-0">
            <Link to="/" className="navbar-brand">Contacts Manager</Link>
          </div>
        </nav>
      </header>
    </>
  )
}
