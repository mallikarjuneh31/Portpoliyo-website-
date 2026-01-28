import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Visitor Counter
const visitorCounter = document.getElementById('visitorCounter');

function updateVisitorCounter() {
  if (!visitorCounter) return;
  
  let count = localStorage.getItem('visitorCount');
  if (count === null) {
    count = 0;
  }
  count = parseInt(count) + 1;
  
  localStorage.setItem('visitorCount', count);
  visitorCounter.textContent = count;
}

// Update visitor count when page loads
updateVisitorCounter();