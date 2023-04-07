import "./AboutSection.css";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import photo1 from "../../../assets/photo1.png";
import photo2 from "../../../assets/photo7.png";
import photo3 from "../../../assets/photo3.png";
import photo4 from "../../../assets/photo8.png";
import photo5 from "../../../assets/photo5.png";
import photo6 from "../../../assets/photo6.png";

export function AboutSection() {
  return (
    <div className="aboutContainer">
      <motion.div
        className="aboutHeader"
        animate={{ y: 50 }}
        transition={{ ease: "linear", stiffness: 100, delay: 11 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h6>01.</h6>
        <u>sobre nós</u>
      </motion.div>

      <div className="aboutContent">
        <motion.div
          className="colLeft"
          animate={{ y: 50 }}
          transition={{ ease: "linear", stiffness: 100, delay: 12 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="itemHeader">
            <div className="itemHeader-heading">
              Fundadores da Monopolius SA{" "}
            </div>
          </div>

          <div className="imgBx">
            <img src={photo6} alt="" />
            <img src={photo1} alt="" />
          </div>

          <div className="itemFooter">
            <div className="itemFooterQuote">Deslize o mouse</div>
          </div>

          <div className="leftCircle">
            <div className="ecllipse">
              <FiArrowUpRight />
            </div>
          </div>
        </motion.div>

        <div className="colRight">
          <motion.p
            animate={{ y: 50 }}
            transition={{ ease: "linear", stiffness: 100, delay: 13 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Olá, prazer em te conhecer! <br />
            <br />
            Monopolius SA é uma empresa fundada na Ilha das Máquinas. Seus
            fundadores são Perry e Dr. Heinz Doofenshmirtz, dois antigos
            inimigos, agora melhores amigos. Nossa missão é mudar o mundo
            através da tecnologia. A Monopolius SA já participou de vários
            eventos internacionais e participações com vários artistas, dentre
            eles: BluePen e Google.
          </motion.p>

          <motion.a
            href="#"
            className="btn btn1"
            animate={{ y: 50 }}
            transition={{ ease: "linear", stiffness: 100, delay: 14 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            VEJA NOSSO INSTAGRAM
          </motion.a>

          <div className="imagesGallery">
            <motion.div
              className="imgBx imgBx2"
              animate={{ y: 50 }}
              transition={{ ease: "linear", stiffness: 100, delay: 15 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={photo3} alt="" />
              <img src={photo4} alt="" />
            </motion.div>

            <motion.div
              className="imgBx imgBx3"
              animate={{ y: 50 }}
              transition={{ ease: "linear", stiffness: 100, delay: 16 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={photo5} alt="" />
              <img src={photo2} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
