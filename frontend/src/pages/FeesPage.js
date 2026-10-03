import { useNavigate } from 'react-router-dom';
import './fees.css';
import { useState } from 'react';
export default function FeesPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [totalFees, setTotalFees] = useState(0);
    const [paid, setPaid] = useState(0);
    const [date, setDate] = useState("");
    const [paymentmode, setPaymentmode] = useState("");
    const [payAmount, setPayAmount] = useState(0);
    const paymentStatus = (paid + payAmount) >= totalFees && totalFees > 0 ? "✅ Paid" : "⏳ Pending";
    const remainingFees = Number(totalFees || 0) -
        Number(paid || 0) -
        Number(payAmount || 0);
    const handlePayment = async () => {
        const paymentData = {
            studentName: name,
            course: course,
            totalFees: totalFees,
            paid: paid,
            paymentAmount: payAmount,
            remainingFees: remainingFees,
            paymentDate: date,
            paymentMode: paymentmode,
            paymentStatus: paymentStatus
        }
        console.log("PAYMENT DATA:", paymentData);
        try {
            const response = await fetch("http://localhost:5000/api/payments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(paymentData)
            });
            const data = await response.json();
            console.log("Saved Successfully", data);
            if (response.ok) {
                alert("Payment saved successfully");
                navigate("/");
            }
        }
        catch (error) {
            console.log("Error:", error);
        }
    }
    const searchStudent = async () => {
        const response = await fetch("http://localhost:5000/api/students");
        const students = await response.json();
        const foundStudent = students.find((student) =>
            student.name.toLowerCase() === name.toLowerCase()
        );
        if (foundStudent) {
            console.log("STUDENT FROM MONGO:", foundStudent);
            setCourse(foundStudent.course);
            setTotalFees(foundStudent.totalFees);
            setPaid(foundStudent.paid || 0);
            setDate(foundStudent.date);
            // setPaymentmode("");
            // setPayAmount(0);
        }
        else {
            setCourse("");
            setTotalFees(0);
            setPaid(0);
            setDate("");
        }
    }

    return (
        <div className='payment'>
            <h1>Add Payment</h1>
            <div className='student-info'>
                <div className='student-name'>
                    <p>Select Student</p>
                    <div className='Name'>
                        <input type='text' placeholder='Enter Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <button className='search' onClick={searchStudent}>🔍</button>
                    </div>
                </div>
                <div className='student-payment'>
                    <p>Payment Date</p>
                    <input type='date' value={date} readOnly />
                </div>
                <div className='student-course'>
                    <p>Course</p>
                    <input type='text' placeholder='Course'
                        value={course} readOnly />
                </div>
                <div className='payment-method'>
                    <p>Payment Mode</p>
                    <select value={paymentmode} onChange={(e) => setPaymentmode(e.target.value)}>
                        <option value="">select an option</option>
                        <option value="UPI">UPI</option>
                        <option value="BHIM">BHIM</option>
                        <option value="NAVI">Navi UPI</option>
                        <option value="CREDIT">Credit Card</option>
                        <option value="DEBIT">Debit Card</option>
                        <option value="COD">COD</option>
                    </select>
                </div>
                <div className='total-fees'>
                    <p>Total Fees</p>
                    <input type='text' placeholder='Total Fees'
                        value={totalFees} readOnly
                    />
                </div>
                <div className='Payment-Amount'>
                    <p>Payment Amount</p>
                    <input type='number' placeholder='amount' value={payAmount}
                        onChange={(e) => setPayAmount(Number(e.target.value))} />
                </div>
                <div className='payment-status'>
                    <p>Payment Status</p>
                    <input type='text' placeholder='status' value={paymentStatus} readOnly />
                </div>
                <div className='already-paid'>
                    <p>Already Paid</p>
                    <input type='text' placeholder='Already Paid' value={paid}
                        readOnly />
                </div>
                <div className='Remaining-Fees'>
                    <p>Remaining Fees</p>
                    <input type='text' placeholder='remaining-fees' value={remainingFees} readOnly />
                </div>
            </div>
            <div className='btn'>
                <button className='cancel' onClick={() => navigate('/')}>Cancel</button>
                <button className='pay' onClick={handlePayment}>Add payment</button>
            </div>
        </div>
    )
}
