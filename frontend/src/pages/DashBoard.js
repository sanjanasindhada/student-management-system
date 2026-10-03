import Dashhead from "../components/Dashhead";
import RecentStu from "../components/RecentStu";
import Attendance from "../components/Attendance";
import Test from "../components/Test";
import Action from "../components/Action";

// import "./DashBoard.css";
export default function DashBoard() {
    return (
        <div>
            {/* <Navbar /> */}
            <Dashhead />
            <div className='twoCOmp'>
                <RecentStu />
                <Attendance />
            </div>
            <div className='twoCOmp'>
                <Test />
                <Action />
            </div>
        </div>
    )
}
