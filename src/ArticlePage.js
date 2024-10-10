import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AiFillHome, AiOutlineSearch, AiFillBook, AiOutlineLogin, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing collapse/expand icons

const articles = [
  {
    id: 1,
    title: "DeepMind's Hassabis Wins Nobel in Chemistry",
    content: "According to the Royal Swedish Academy of Sciences, Demis Hassabis...",
    imgSrc: '/images/quantum.jpeg',
  },
  {
    id: 2,
    title: "Ben Franklin’s 200-Year Trust Experiment",
    content: 'Benjamin Franklin’s 200-year trust experiment, initiated in 1785...',
    imgSrc: '/images/ai_healthcare.jpeg',
  },
];

const ArticlePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

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
      <div className="content article-content">
        <h1 className="article-title">{article.title}</h1>
        <img src={article.imgSrc} alt={article.title} className="article-img" />
        <p className="article-text">{article.content}</p>
        <div className="chat-bar">
          <input type="text" placeholder="Ask follow-up" />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
