import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import UserManagementPage from './components/UserManagementPage/UserManagementPage';
import AssetsPage from './components/AssetsPage/AssetsPage';
import UtilizationsPage from './components/UtilizationsPage/UtilizationsPage';
import RepairsPage from './components/RepairsPage/RepairsPage';
import PMCalsPage from './components/PMCalsPage/PMCalsPage';
import ConsumablesPage from './components/ConsumablesPage/ConsumablesPage';
import SchedulePage from './components/SchedulePage/SchedulePage';
import ReportingPage from './components/ReportingPage/ReportingPage';
import VendorsPage from './components/VendorsPage/VendorsPage';
import AuditPage from './components/AuditPage/AuditPage';
import BookingPage from './components/BookingPage/BookingPage';
import EditAssetsPage from './components/EditAssetsPage/EditAssetsPage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./global.css";

function App() {
  return (
      <>
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/assets' element={<AssetsPage />} />
                <Route path='/utilizations' element={<UtilizationsPage />} />
                <Route path='/repairs' element={<RepairsPage />} />
                <Route path='/pmcals' element={<PMCalsPage />} />
                <Route path='/operators' element={<UserManagementPage />} />
                <Route path='/consumables' element={<ConsumablesPage />} />
                <Route path='/schedule' element={<SchedulePage />} />
                <Route path='/reporting' element={<ReportingPage />} />
                <Route path='/vendors' element={<VendorsPage />} />
                <Route path='/audit' element={<AuditPage />} />
                <Route path='/booking' element={<BookingPage />} />
                <Route path='/edit-asset' element={<EditAssetsPage />} />
            </Routes>
        </Router>
      </>
  );
}

export default App;
