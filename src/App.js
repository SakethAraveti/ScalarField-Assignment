import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiscoverPage from './DiscoverPage';
import ArticlePage from './ArticlePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiscoverPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/library" element={<div>Library Page</div>} />
        <Route path="/signin" element={<div>Sign In Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
