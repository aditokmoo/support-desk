import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// Pages
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
// Components
import { Navbar } from './components/Navbar';
// CSS
import 'react-toastify/dist/ReactToastify.css'
import './App.css';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
        />
    </>
  );
}

export default App;
