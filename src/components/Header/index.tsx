import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import "./Header.css";
import { useState } from "react";

//import { NavLink } from 'react-router-dom'
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <nav>
        <div className="Navbar">
          <span className="nav-logo">monopolius sa</span>
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="#">sobre</a>
            <a href="#">perrynaitor</a>
            <a href="#">fac</a>
            <a href="#">sugestões</a>
            <a href="#">contato</a>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
