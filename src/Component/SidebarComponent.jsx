import React, { useState } from "react";
import "../Css/SidebarDesign.css";
import { FaHome, FaCalendarAlt, FaTicketAlt, FaFolder, FaClipboard, FaProjectDiagram, FaUser, FaCube, FaThLarge } from "react-icons/fa";
import logowevioopng from "./logowevioopng.png"; 

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null); 

  const handleItemClick = (index) => {
    setActiveItem(index); 
  };

  return (
    <div className="sidebar" style={{marginTop:'-50px'}}>
      <div className="sidebar-logo">
        <img src={logowevioopng} alt="Logo" style={{ width: '180px', height: 'auto', margin: '20px 0' }} />
      </div>
      <hr style={{ 
        border: 'none',
        height: '1px',
        background: '#444',
        margin: '10px 20px'
      }}/>
      <ul className="sidebar-list">
        {/* Menu Section */}
        <li className="sidebar-section" style={{color:"#808080"}}>Menu</li>
        <li
          className={`sidebar-item ${activeItem === 0 ? 'active' : ''}`}
          onClick={() => handleItemClick(0)}
        >
          <FaHome className="sidebar-icon" />
          <span>Dashboard</span>
        </li>

        {/* Apps Section */}
        <li className="sidebar-section" style={{color:"#808080"}}>Apps</li>
        <li
          className={`sidebar-item ${activeItem === 1 ? 'active' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          <FaCalendarAlt className="sidebar-icon" />
          <span>Calendar</span>
        </li>
        <li
          className={`sidebar-item ${activeItem === 2 ? 'active' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          <FaTicketAlt className="sidebar-icon" />
          <span>Tickets</span>
        </li>
        <li
          className={`sidebar-item ${activeItem === 3 ? 'active' : ''}`}
          onClick={() => handleItemClick(3)}
        >
          <FaFolder className="sidebar-icon" />
          <span>File Manager</span>
        </li>
        <li
          className={`sidebar-item ${activeItem === 4 ? 'active' : ''}`}
          onClick={() => handleItemClick(4)}
        >
          <FaClipboard className="sidebar-icon" />
          <span>Kanban Board</span>
        </li>
        <li
          className={`sidebar-item ${activeItem === 5 ? 'active' : ''}`}
          onClick={() => handleItemClick(5)}
        >
          <FaProjectDiagram className="sidebar-icon" />
          <span>Project</span>
        </li>

        {/* Custom Section */}
        <li className="sidebar-section" style={{color:"#808080"}}>Custom</li>
        <li
          className={`sidebar-item ${activeItem === 6 ? 'active' : ''}`}
          onClick={() => handleItemClick(6)}
        >
          <FaUser className="sidebar-icon" />
          <span>Auth Pages</span>
        </li>
        <li
          className={`sidebar-item ${activeItem === 7 ? 'active' : ''}`}
          onClick={() => handleItemClick(7)}
        >
          <FaCube className="sidebar-icon" />
          <span>Extra Pages</span>
        </li>

        {/* Elements Section */}
        <li className="sidebar-section" style={{color:"#808080"}}>Elements</li>
        <li
          className={`sidebar-item ${activeItem === 8 ? 'active' : ''}`}
          onClick={() => handleItemClick(8)}
        >
          <FaThLarge className="sidebar-icon" />
          <span>Components</span>
        </li>
        <li
          className={`sidebar-item ${activeItem === 9 ? 'active' : ''}`}
          onClick={() => handleItemClick(9)}
        >
          <FaThLarge className="sidebar-icon" />
          <span>Extended UI</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
