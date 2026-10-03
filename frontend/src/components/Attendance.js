import React from 'react'
import './attendance.css';
export default function Attendance() {
    return (
        <div className='attendance-box'>
            <div className="attendance">
                <h2>Attendance Overview</h2>
                <select>
                    <option>This Week</option>
                </select>
            </div>
            <div className='Attend'>
                <div className="donut">
                    <div className="donut-center">
                        <h2>85%</h2>
                        <p>Present</p>
                    </div>
                </div>
                <div className='PresAbs'>
                    <div className='Present'>
                        <p>🟢Present</p>
                    </div>
                    <div className='Absent'>
                        <p>🔴Absent</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
