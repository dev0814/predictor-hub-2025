import { useState } from 'react'
import './App.css'

function App() {
  const predictorsList = [
    {
      id: 1,
      name: "JOSAA Predictor",
      description: "Predict colleges and branches through JOSAA counseling",
      url: "https://clg-pred-josaa-2025.vercel.app/",
      image: "https://via.placeholder.com/150?text=JOSAA"
    },
    {
      id: 2,
      name: "CSAB Predictor",
      description: "CSAB special round college prediction tool",
      url: "https://clg-pred-csab-2025.vercel.app/",
      image: "https://via.placeholder.com/150?text=CSAB"
    },
    {
      id: 3,
      name: "AKTU Predictor",
      description: "Abdul Kalam Technical University predictor tool",
      url: "https://clg-pred-aktu-2025.vercel.app/",
      image: "https://via.placeholder.com/150?text=AKTU"
    },
    {
      id: 4,
      name: "HBTU Predictor",
      description: "Harcourt Butler Technical University predictor",
      url: "https://clg-pred-hbtu-2025.vercel.app/",
      image: "https://via.placeholder.com/150?text=HPTU"
    },
    {
      id: 5,
      name: "JAC Delhi Predictor",
      description: "Predict colleges in Delhi through JAC counseling",
      url: "https://clg-pred-jac-2025.vercel.app/",
      image: "https://via.placeholder.com/150?text=JAC"
    },
    {
      id: 6,
      name: "JAC Chandigarh Predictor",
      description: "Predict colleges in Chandigarh through JAC counseling",
      url: "https://clg-pred-jac-chandigarh-2025.vercel.app/",
      image: "https://via.placeholder.com/150?text=JAC+CHD"
    },
    {
      id: 7,
      name: "WBJEE Predictor",
      description: "Predict colleges in West Bengal through WBJEE",
      url: "https://clg-pred-wbjee-2025.vercel.app/",
      image: "https://via.placeholder.com/150?text=WBJEE"
    },
    {
      id: 8,
      name: "PTU Predictor",
      description: "Punjab Technical University predictor tool",
      url: "https://clg-pred-ptu-2025.vercel.app/",
      image: "https://via.placeholder.com/150?text=PTU"
    },
    {
      id: 9,
      name: "MPDTE Predictor",
      description: "Madhya Pradesh Directorate of Technical Education predictor",
      url: "https://clg-pred-mpdte-2025.vercel.app/",
      image: "https://via.placeholder.com/150?text=MPDTE"
    }
  ];

  const openPredictor = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container">
      <header>
        <h1>College Predictors Hub</h1>
        <p>Find the best colleges based on your rank and preferences</p>
      </header>
      
      <div className="predictors-grid">
        {predictorsList.map((predictor) => (
          <div 
            key={predictor.id} 
            className="predictor-card"
            onClick={() => openPredictor(predictor.url)}
          >
            {/* <div className="card-image">
              <img src={predictor.image} alt={predictor.name} />
            </div> */}
            <div className="card-content">
              <h2>{predictor.name}</h2>
              <p>{predictor.description}</p>
              <button className="visit-btn">Visit Predictor</button>
            </div>
          </div>
        ))}
      </div>
      
      <footer>
        <p>© 2025 College Predictors Hub | All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App
