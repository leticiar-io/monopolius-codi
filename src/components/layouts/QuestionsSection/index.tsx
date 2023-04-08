import AccordionComponent from "../../Accordion";
import "./QuestionsSection.css";

export function QuestionsSection() {
  return (
    <div className="facContainer" id="fac">
      <div className="facHeader">
        <h6>03.</h6>
        <u>Perguntas frequentes</u>
      </div>

      <div className="facContent">
        <div className="colLeft">
          <p>
            Está com alguma dúvida em relação ao Perrynaitor ou da nossa
            empresa? Veja as dúvidas mais frequentes, caso não encontre o que
            deseja, por favor entre em contato.
          </p>
        </div>

        <div className="colRight">
          <AccordionComponent />
        </div>
      </div>
    </div>
  );
}
