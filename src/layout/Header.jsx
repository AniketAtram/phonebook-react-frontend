import { Link } from "react-router-dom"
export default function Header() {
  return (
    <>
      <header className="container-fluid bg-primary text-white p-1">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link to="/" className="navbar-brand">Contacts Manager</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact/create">
                    + Add
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
      </header>
    </>
  )
}
