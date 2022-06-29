import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    </Router>
  );
}

export default App;
