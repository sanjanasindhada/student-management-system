import React, { useState } from 'react'
import './stupage.css';
import { useNavigate } from 'react-router-dom';
export default function StuPage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [batch, setBatch] = useState("");
    const [date, setDate] = useState("");
    const [totalFees, setTotalFees] = useState();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Student Name:", name);
        // console.log("Phone", phone);
        // console.log("Course", course);
        // console.log("Batch", batch);
        // console.log("Date", date);
        const studentData = {
            name,
            phone,
            course,
            batch,
            date,
            totalFees
        };
        try {
            const response = await fetch(
                "http://localhost:5000/api/students", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(studentData)
            }
            );
            const data = await response.json();
            console.log("Student Added:", data);
            navigate("/");
        }
        catch (error) {
            console.log("Error:", error);
        }
    };
    return (
        <div className='form-page'>
            <h1>Add Student</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Student Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br></br><br></br>

                <input type='text' placeholder='phone number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                /><br></br><br></br>

                <input type='text' placeholder='Course'
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                /><br></br><br></br>

                <input type='text' placeholder='Batch'
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                /><br></br><br></br>

                <input type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                /><br></br><br></br>
                <input type='number' placeholder='enter fees'
                    value={totalFees}
                    onChange={(e) => setTotalFees(e.target.value)}
                /><br></br><br></br>
                <button type='submit' >Add Student</button>
            </form>
        </div>
    )
}
