import { motion } from "framer-motion";
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
            <motion.a
              href="#about"
              animate={{ y: 2}}
              transition={{ ease: "linear", stiffness: 100, delay: 1, duration: 0.5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              sobre
            </motion.a>
            <motion.a
              href="#perrynaitor"
              animate={{ y: 2}}
              transition={{ ease: "linear", stiffness: 100, delay: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              perrynaitor
            </motion.a>
            <motion.a
              href="#fac"
              animate={{ y: 2}}
              transition={{ ease: "linear", stiffness: 100, delay: 3 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              fac
            </motion.a>
            <motion.a
              href="#opinions"
              animate={{ y: 2}}
              transition={{ ease: "linear", stiffness: 100, delay: 4 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              sugestões
            </motion.a>
            <motion.a
              href="#contact"
              animate={{ y: 2}}
              transition={{ ease: "linear", stiffness: 100, delay: 5}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              contato
            </motion.a>
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
