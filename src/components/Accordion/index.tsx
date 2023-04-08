import * as Accordion from "@radix-ui/react-accordion";
import { FiChevronDown } from "react-icons/fi";

import "./Accordion.css";

export function AccordionComponent() {
  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <Accordion.Trigger className="AccordionItemTitle">
          1. O serviço de relacionamento do Perrynaitor funciona?
          <FiChevronDown className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
        <Accordion.Content className="AccordionItemContent">
          Sim, o serviço tecnológico funciona. Há diversas avaliações positivas
          de nosso produto. Desde conselhos amorosos de como chegar no(a/e) seu
          crush até serviços anti-corno.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-2">
        <Accordion.Trigger className="AccordionItemTitle">
          2. O Perrynaitor demora quanto tempo para chegar?
          <FiChevronDown className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>

        <Accordion.Content className="AccordionItemContent">
          Trabalhamos com o modelo de produção japonês Toyotismo, você faz seu
          pedido e fazemos na hora. Enquanto ao envio, dependendo de sua
          localização, demora em torno de 2 a 3 meses para chegar.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-3">
        <Accordion.Trigger className="AccordionItemTitle">
          3. Como faço para entrar no time?
          <FiChevronDown className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
        <Accordion.Content className="AccordionItemContent">
          Isso é bem simples, basta mandar um pix para um de nossos fundadores e
          na descrição do pix colocar seu currículo com experiências!
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-4">
        <Accordion.Trigger className="AccordionItemTitle">
          4. Tem desconto para estudante?
          <FiChevronDown className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>

        <Accordion.Content className="AccordionItemContent">
          Sim, possuimos desconto de estudante. Sabemos o qual dificil é ser
          estudante! Principalmente os estudantes de SMD, garantimos o desconto
          de 45% na compra de um Perrynaitor. Os demais, garantimos 5% de
          desconto.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default AccordionComponent;
