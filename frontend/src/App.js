import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import DashBoard from './pages/DashBoard';
import Navbar from './components/Navbar';
import StuPage from './pages/StuPage';
import AttendPage from './pages/AttendPage';
import FeesPage from './pages/FeesPage';
import TestPage from './pages/TestPage';
import ProgresSPage from './pages/ProgressPage';
import Recent from './components/Recent';
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/students" element={<StuPage />} />
        <Route path="/attendance" element={<AttendPage />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route path="/tests" element={<TestPage />} />
        <Route path="/progress" element={<ProgresSPage />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/attendancepage" element={<AttendPage />} />
        <Route path='/' element={<App />} />
      </Routes>
    </div>
  )
}
