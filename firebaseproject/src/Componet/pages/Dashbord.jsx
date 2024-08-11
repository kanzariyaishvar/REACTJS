import React from 'react'
import { Link } from 'react-router-dom'
import Aside from './Admin'

export default function Dashbord() {
  return (
<>
<div className="container">
        

        <Aside/>
        
        <main className="main-content">
            <header className="header">
                <div className="user-profile">
                    <img src="assets//images//profile/user-1.jpg" alt="User Avatar" />
                </div>
            </header>
            <section className="dashboard">
                <div className="sales-overview card">
                    <h3>Sales Overview</h3>
                </div>
                <div className="stats">
                    <div className="yearly-breakup card">
                        <h3>Yearly Breakup</h3>
                        <p>$36,358</p>
                        <span>+9% last year</span>
                    </div>
                    <div className="monthly-earnings card">
                        <h3>Monthly Earnings</h3>
                        <p>$6,820</p>
                        <span>+9% last year</span>
                    </div>
                </div>
                <div className="transactions">
                    <div className="recent-transactions card">
                        <h3>Recent Transactions</h3>
                        <ul>
                            <li><span>09:30</span> Payment received from John Doe of $385.90</li>
                            <li><span>10:00</span> New sale recorded <a href="#">#ML-3467</a></li>
                            <li><span>12:00</span> Payment was made of $64.95 to Michael</li>
                        </ul>
                    </div>
                    <div className="task-transactions card">
                        <h3>Recent Transactions</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Assigned</th>
                                    <th>Name</th>
                                    <th>Priority</th>
                                    <th>Budget</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Sunil Joshi</td>
                                    <td>Elite Admin</td>
                                    <td><span className="badge low">Low</span></td>
                                    <td>$3.9</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Andrew McDownland</td>
                                    <td>Real Homes WP Theme</td>
                                    <td><span className="badge medium">Medium</span></td>
                                    <td>$24.5k</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    </div>  
</>

  )
}
