import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import routes from "./Routes"
import Header from './layout/Header'
import Footer from './layout/Footer'
export default function AppRouter() {
  return (
    <>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              {
                routes?.map((data, indx) => (
                  <Route path={data?.path} element={data?.element} key={indx} />
                ))
              }
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}
