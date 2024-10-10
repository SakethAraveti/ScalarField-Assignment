import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineSearch, AiFillBook, AiOutlineLogin, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing collapse/expand icons

const articles = [
  {
    id: 1,
    title: "DeepMind's Hassabis Wins Nobel in Chemistry",
    description: "According to the Royal Swedish Academy of Sciences, Demis Hassabis...",
    imgSrc: '/images/quantum.jpeg',
  },
  {
    id: 2,
    title: "Ben Franklin’s 200-Year Trust Experiment",
    description: "Benjamin Franklin’s 200-year trust experiment...",
    imgSrc: '/images/ai_healthcare.jpeg',
  },
];

const DiscoverPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className={isSidebarOpen ? 'sidebar' : 'sidebar collapsed'}>
        <div className="sidebar-content">
          <h2>{isSidebarOpen ? 'Perplexity' : 'P'}</h2>
          <ul>
            <li>
              <Link to="/">
                <AiFillHome className="icon" />
                {isSidebarOpen && <span>Home</span>}
              </Link>
            </li>
            <li className="active">
              <Link to="/">
                <AiOutlineSearch className="icon" />
                {isSidebarOpen && <span>Discover</span>}
              </Link>
            </li>
            <li>
              <Link to="/library">
                <AiFillBook className="icon" />
                {isSidebarOpen && <span>Library</span>}
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <AiOutlineLogin className="icon" />
                {isSidebarOpen && <span>Sign in</span>}
              </Link>
            </li>
          </ul>
          {isSidebarOpen && (
            <button className="signup-btn">Sign Up</button>
          )}
        </div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? <AiOutlineLeft /> : <AiOutlineRight />}
        </button>
      </div>

      {/* Main content */}
      <div className="content">
        <h1 className="header">Discover</h1>
        <div className="filter-buttons">
          <button>Top</button>
          <button>Tech & Science</button>
          <button>Finance</button>
          <button>Arts & Culture</button>
          <button>Sports</button>
          <button>Entertainment</button>
        </div>

        <div className="grid">
          {articles.map((article) => (
            <Link to={`/article/${article.id}`} key={article.id} className="card-link">
              <div className="card">
                <img src={article.imgSrc} alt={article.title} className="card-img" />
                <div className="card-body">
                  <h2 className="card-title">{article.title}</h2>
                  <p className="card-description">{article.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
