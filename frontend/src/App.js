import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// Pages
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NewTicket } from './pages/NewTicket';
// Components
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
// CSS
import 'react-toastify/dist/ReactToastify.css'
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/new-ticket' element={<PrivateRoute><NewTicket /></PrivateRoute>} />
        </Routes>
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
