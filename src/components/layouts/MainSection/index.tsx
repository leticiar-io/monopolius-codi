import "./MainSection.css";
import "./hovertree.js";

import { motion } from "framer-motion";

export function MainSection() {
  return (
    <main>
      <div className="text">
        <motion.span
          
          transition={{ ease: "linear", stiffness: 100, delay: 7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="companyName"
        >
          Monopolius SA
        </motion.span>
        <motion.h1
          className="title"
          transition={{ ease: "linear", stiffness: 100, delay: 7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          NÓS SOMOS O <br />
          <u className="sub">FUTURO</u> DA <br />
          <u className="sub">TECNOLOGIA</u>
        </motion.h1>
        <motion.span
          className="subtitle"
          transition={{ ease: "linear", stiffness: 100, delay: 7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Que tal embarcar no futuro?
        </motion.span>

        <motion.a
          href="#"
          className="btn btn1"
          transition={{ ease: "linear", stiffness: 100, delay: 7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          VEJA NOSSOS PRODUTOS
        </motion.a>
      </div>

      <canvas id="canvas"></canvas>
    </main>
  );
}
