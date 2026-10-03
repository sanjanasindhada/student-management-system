import React from 'react'
import './test.css';
export default function Test() {
    return (
        <div className='test'>
            <div className='test-head'>
                <h2>Recent Tests</h2>
                <a href="#">View all</a>
            </div>
            <div className='colm'>
               <p>Test Name</p>
               <p>Course</p>
               <p>Date</p>
               <p>Total Students</p>
               <p>Average Marks</p>
            </div>
        </div>
    )
}
