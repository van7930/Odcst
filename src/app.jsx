import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ForgotPassword from './components/forgot_password';
import SystemAdminDashboard from './components/systemadminDashboard';
import LabAdminDashboard from './components/labadminDashboard';
import MentorDashboard from './components/mentorDashboard';
import CandidateDashboard from './components/candidateDashboard';
import EnterpriseDashboard from './components/enterpriseDashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/system_admin" element={<SystemAdminDashboard/>} />
        <Route path="/lab_admin" element={<LabAdminDashboard/>}/>
        <Route path="/mentor" element={<MentorDashboard/>} />
        <Route path="/candidate" element={<CandidateDashboard/>} />
        <Route path="/enterprise" element={<EnterpriseDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;