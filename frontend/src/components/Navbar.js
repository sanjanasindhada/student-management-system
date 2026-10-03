import React from 'react'
import './navbar.css';
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                🎓 COACHING HUB
            </div>
            <div className="menu">
                <a href="/">🏠 Dashboard</a>
                <a href="/">📚 Students</a>
                <a href="/">📅 Attendance</a>
                <a href="/">💰 Fees</a>
                <a href="/">📝 Tests</a>
                <a href="/">📈 Progress</a>
            </div>
        </div>
    )
}
