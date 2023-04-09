import * as Dialog from "@radix-ui/react-dialog";
import "./PerrynaitorSection.css";

import { ModalPropaganda } from "../../ModalPropaganda";
import perryImg from "../../../assets/perrynaitor.png";

export function PerrynaitorSection() {
  return (
    <div className="perrynaitorContainer" id="perrynaitor">
      <div
        className="perrynaitorHeader"
      >
        <h6>02.</h6>
        <u>perrynaitor</u>
      </div>

      <div className="perrynaitorContent">
        <div
          className="colLeft"
        >
          <div className="img-wrapper">
            <div className="perryImg">
              <img src={perryImg} alt="" />
            </div>
          </div>
        </div>

        <div className="colRight">
          <p
          >
            Preparem seus corações (e o seu bolso) .... <br /> <br />
            Perrynaitor é a nova sensação do momento! Ele faz tudo, traduz
            textos para você, toca música para você, localiza lugares para você,
            escreve redações e seu TCC por você! E digo mais, resolve seus
            problemas amorozos por você!
          </p>

          <Dialog.Root>
            {/* It's a context */}
            <Dialog.Trigger asChild>
              <div className="modalBtn">Veja uma demonstração</div>
            </Dialog.Trigger>
            <ModalPropaganda />
          </Dialog.Root>

          <div className="link">
            <a className="buyBtn buyBtn1">compre agora</a>
          </div>
        </div>
      </div>
    </div>
  );
}
