import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './attendpage.css';
export default function AttedPage() {
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState([]);
    const [date, setDate] = useState("");
    const [batch, setBatch] = useState("");
    const navigate = useNavigate();
    const handleAttendancde = (id, status) => {
        setAttendance({
            ...attendance,
            [id]: status
        })
    }
    const handleSave = async () => {
        const data = {
            attendance: attendance,
            date: date,
            batch: batch
        }
        console.log("DATA TO BACKEND:", data);
        try {
            const response = await fetch(
                "http://localhost:5000/api/attendance",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );
            const result = await response.json();
            console.log("BACKEND RESPONSE:", result);
            navigate("/");
        }
        catch (error) {
            console.log("ERROR:", error);
        }
    }
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
    return (
        <div className='attend_box'>
            <h2>Take Attendance</h2>
            <div className='take_attend'>
                <span>Date:</span><input type='date' value={date} onChange={(e) => setDate(e.target.value)} /><br></br><br></br>
                <span>Batch:</span>  <select value={batch} onChange={(e) => setBatch(e.target.value)}>
                    <option>Morning</option>
                    <option>Evening</option>
                </select>
            </div>
            <div className='stu-box'>
                <div className="stu-name">
                    <p>#</p>
                    <p>Name</p>
                    <p>Course</p>
                    <p>Batch</p>
                    <p>Attendance</p>
                </div>
                {students.map((student, index) => (
                    <div className='stu-name' key={student._id}>
                        <p>{index + 1}</p>
                        <p>{student.name}</p>
                        <p>{student.course}</p>
                        <p>{student.batch}</p>
                        <p className='abspres'>
                            <button className={attendance[student._id] === "present" ? "present active" : "present"}
                                onClick={() => handleAttendancde(student._id, "present")}
                            >
                                Present
                            </button>
                            <button className={attendance[student._id] === "absent" ? "absent active" : "absent"}
                                onClick={() => handleAttendancde(student._id, "absent")}
                            >
                                Absent
                            </button>
                        </p>
                    </div>
                ))}
                <button className='save-btn' onClick={handleSave}>Save Attendance</button>
            </div>
        </div>
    )
}
