import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from "./screen/ListaScreen"; // Import your ProjectList
import LoadingScreen from "./Component/loadingComponent"; // Import your LoadingScreen
import logo2 from './logo.svg';
import logo3 from './symfony.png';
import logo4 from './xampp.svg';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/mainpage") {
      loadMainPage();
    }
  }, []); // Run only once when the component is mounted

  const loadMainPage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default Route */}
          <Route
            path="/"
            element={
              <header className="App-header">

                <div className="logo-container">
                  <img src={logo2} className="App-logo rotating" alt="logo2" />
                  <img src={logo3} className="App-logo rotating" alt="logo3" />
                </div>
                <p>
                  Technical test for Wevioo Release 1.0.0 for Mr ahmed wahabi - 2025-01-21
                </p>
                <p>
                  Developed by : Kharrat Raed 
                </p>
                <a
                  className="App-link"
                  onClick={() => {
                    loadMainPage();
                    window.location.href = "/mainpage";
                  }}
                  style={{
                    cursor: 'pointer',
                    background: '#4dd0e1',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    color: '#1c1c1c',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '20px'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Let's Get Started!
                </a>
              </header>
            }
          />
          {/* Main Page Route */}
          <Route
            path="/mainpage"
            element={
              isLoading ? (
                <LoadingScreen /> 
              ) : (
                <MainPage />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;