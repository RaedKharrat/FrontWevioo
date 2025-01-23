import React, { useState, useEffect } from "react";
import { fetchProjects } from "../Api/Api"; 
import "../Css/ListaDesign.css";
import $ from 'jquery'; // Import jQuery

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects(); 
        console.log("API response:", data); 
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    // jQuery search functionality
    const handleSearch = () => {
      const term = searchTerm.toLowerCase();
      $(".project-card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(term) > -1);
      });
    };

    handleSearch();
  }, [searchTerm]); // Run this effect whenever searchTerm changes

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="project-list">
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder=" Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-header">
            <h3>{project.Categorie}</h3>
            <span className={`status ${project.status.toLowerCase().replace(" ", "-")}`}>
              {project.status}
            </span>
          </div>
          <hr />
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div className="members">
            <span className="extra-members">
              {project.tasks} tasks | {project.comments} comments
            </span>
          </div>
          <hr />
          <div className="project-footer">
            <span className="date">
              {new Date(project.date).toLocaleDateString()}
            </span>
            <div className="stats">
              <div className="progress-bar">
                <div className="progress" style={{ width: `${project.progress}%` }}></div>
              </div>
              <span>{project.progress}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;