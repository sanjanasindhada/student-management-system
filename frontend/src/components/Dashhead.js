import React from 'react'
import './dashhead.css';

export default function Dashhead() {
    return (
        <div>
            <div className="dashboard">
                <div className="dashhead">
                    <h2>Dashboard</h2>
                </div>
                <div>
                    <input type="date" />
                </div>
            </div>
            <div className="cards">
                <div className="card1">
                    <div className="card1-content">
                        👥
                    </div>
                    <div className="card1-text">
                        <p>Total Students</p>
                        <div className="card1-res">
                            <h3>120</h3>
                            <a href="#">View all</a>
                        </div>
                    </div>

                </div>
                <div className="card2">
                    <div className="card2-content">
                        <div className="card2-text">
                            ✓
                        </div>
                    </div>
                    <div className="card2-txt">
                        <p>Present Today</p>
                        <div className="card1-res">
                            <h3>120</h3>
                            <a href="#">View all</a>
                        </div>
                    </div>
                </div>
                <div className="card3">
                    <div className="card3-content">
                        ✕
                    </div>
                    <div className="card3-text">
                        <p>Absent Today</p>
                        <div className="card1-res">
                            <h3>120</h3>
                            <a href="#">View all</a>
                        </div>
                    </div>
                </div>
                <div className="card4">
                    <div className="card4-content">
                        💳
                    </div>
                    <div className="card4-text">
                        <p>Fess Pending</p>
                        <div className="card1-res">
                            <h3>120</h3>
                            <a href="#">View all</a>
                        </div>
                    </div>
                </div>
                <div className="card5">
                    <div className="card5-content">
                        📋
                    </div>
                    <div className="card5-text">
                        <p>Tests This Month</p>
                        <div className="card1-res">
                            <h3>120</h3>
                            <a href="#">View all</a>
                        </div>
                    </div>
                </div>
                <div className="card6">
                    <div className="card6-content">
                        📊
                    </div>
                    <div className="card6-text">
                        <p>Average Marks</p>
                        <div className="card1-res">
                            <h3>120</h3>
                            <a href="#">View all</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
