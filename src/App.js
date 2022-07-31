import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import UserManagementPage from './components/UserManagementPage/UserManagementPage';
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
                <Route path='/assets' element={<HomePage />} />
                <Route path='/utilizations' element={<HomePage />} />
                <Route path='/repairs' element={<HomePage />} />
                <Route path='/pmcals' element={<HomePage />} />
                <Route path='/operators' element={<UserManagementPage />} />
                <Route path='/consumables' element={<HomePage />} />
                <Route path='/schedule' element={<HomePage />} />
                <Route path='/reporting' element={<HomePage />} />
                <Route path='/vendors' element={<HomePage />} />
                <Route path='/audit' element={<HomePage />} />
            </Routes>
        </Router>
      </>
  );
}

export default App;
