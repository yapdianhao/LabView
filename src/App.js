import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <>
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </Router>
        <ToastContainer />
      </>
  );
}

export default App;
