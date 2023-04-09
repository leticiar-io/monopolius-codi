import { FiArrowUpRight } from "react-icons/fi";
import "./AboutSection.css";

import photo1 from "../../../assets/photo1.png";
import photo2 from "../../../assets/photo7.png";
import photo3 from "../../../assets/photo3.png";
import photo4 from "../../../assets/photo8.png";
import photo5 from "../../../assets/photo5.png";
import photo6 from "../../../assets/photo6.png";

export function AboutSection() {
  return (
    <div className="aboutContainer" id="#about">
      <div
        className="aboutHeader"
      >
        <h6>01.</h6>
        <u>sobre nós</u>
      </div>

      <div className="aboutContent">
        <div
          className="colLeft"
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
        </div>

        <div className="colRight">
          <p
          >
            Olá, prazer em te conhecer! <br />
            <br />
            Monopolius SA é uma empresa fundada na Ilha das Máquinas. Seus
            fundadores são Perry e Dr. Heinz Doofenshmirtz, dois antigos
            inimigos, agora melhores amigos. Nossa missão é mudar o mundo
            através da tecnologia. A Monopolius SA já participou de vários
            eventos internacionais e participações com vários artistas, dentre
            eles: BluePen e Google.
          </p>

          <a
            href="#"
            className="btn btn1"
          >
            VEJA NOSSO INSTAGRAM
          </a>

          <div className="imagesGallery">
            <div
              className="imgBx imgBx2"
            >
              <img src={photo3} alt="" />
              <img src={photo4} alt="" />
            </div>

            <div
              className="imgBx imgBx3"
            >
              <img src={photo5} alt="" />
              <img src={photo2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
