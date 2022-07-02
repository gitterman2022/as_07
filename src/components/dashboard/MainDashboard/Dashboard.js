import React from 'react';
import Logo from '../../common/Logo/Logo';
import Footer from '../../user/pages/Footer/Footer';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dheight">
    <div className="dashboard">
            <nav className="dashboardNav">
                <Logo design={{fontSize:"45px"}} />
            </nav>
            <div className="dashboardBody">
                <aside>
                  <ul>
                    <li>Dashboard</li>
                    <li>Add New Page</li>
                    <li>Manage Blog</li>
                    <li>Add New Admin</li>
                    <li>Logout</li>
                  </ul>
                </aside>
                <main className="bodyContent">
                    <h1>Welcome to 'Spicy Blog!' Admin Panel!</h1>
                </main>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Dashboard;