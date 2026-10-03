import React, { useEffect, useState } from 'react'
import './recent.css';
import { useNavigate } from 'react-router-dom';
export default function RecentStu() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/students")
            .then((response) => response.json())
            .then((data) => {
                console.log("DATA FROM BACKEND:", data);
                setStudents(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const navigate = useNavigate();

    return (
        <div className="recent">
            <div className="recent-students">
                <h2>👥 Recent Students</h2>
                <button onClick={() => navigate("/recent")}>View all</button>
            </div>

            <div className="student-heading">
                <p>Name</p>
                <p>Phone</p>
                <p>Course</p>
                <p>Batch</p>
                <p>Date</p>
                <p>Fees</p>
            </div>
            {students.slice(0, 4).map((student) => (
                <div className='student' key={student._id}>
                    <p>{student.name}</p>
                    <p>{student.phone}</p>
                    <p>{student.course}</p>
                    <p>{student.batch}</p>
                    <p>{student.date}</p>
                    <p>{student.totalFees}</p>
                </div>
            ))}
        </div>
    )
}
