import React from "react";
import Sidebar from "../Component/SidebarComponent"; // Import the Sidebar component
import ProjectList from "../Component/ListaComponent"; // Import the ProjectList component
import "../Css/MainPageDesign.css"; // Include the CSS file for layout styling

const MainPage = () => {
  return (
    <div className="mainpage-container">
      {/* AppBar Section */}
      <header className="appbar">
        <h1>Project For Wevioo Technical Test</h1>
      </header>

      {/* Main Content Section */}
      <div className="main-content">
        {/* Sidebar Section */}
        <div className="sidebar-section">
          <Sidebar />
        </div>

        {/* Project List Section */}
        <div className="content-section">
        <p>Project List</p>

          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
