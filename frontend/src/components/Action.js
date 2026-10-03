import React from "react";
import "./action.css";
import { useNavigate } from "react-router-dom";
export default function Action() {
  const navigate = useNavigate();
  return (
    <div className="quick-action">

      <div className="action-heading">
        ⚡ <span>Quick Actions</span>
      </div>

      <div className="action-cards">

        <div className="action-card studentt"
          onClick={() => navigate("/students")}
        >
          <div className="action-icon">
            👤+
          </div>
          <span>Add</span>
          <span>Student</span>
        </div>

        <div className="action-card attendancee"
          onClick={() => navigate("/attendancepage")}
        >
          <div className="action-icon">📅</div>
          <span>Take</span>
          <span>Attendance</span>
        </div>

        <div className="action-card paymentt"
          onClick={() => navigate("/fees")}
        >
          <div className="action-icon">₹</div>
          <span>Add</span>
          <span>Payment</span>
        </div>

        <div className="action-card testt"
          onClick={() => navigate("/TestPage")}
        >
          <div className="action-icon">📄</div>
          <span>Create</span>
          <span>Test</span>
        </div>

      </div>

    </div>
  );
}