import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import routes from "./Routes"
import Header from './layout/Header'
import Footer from './layout/Footer'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
export default function AppRouter() {
  return (
    <>
      {/* ToastContainer placed here for global accessibility */}
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{ zIndex: 1050 }} // Ensure the z-index is higher than other elements
          />
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
