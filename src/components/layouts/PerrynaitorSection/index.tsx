import "./PerrynaitorSection.css";
import { motion } from "framer-motion";

import perryImg from "../../../assets/perrynaitor.png";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineClose } from "react-icons/ai";
import { ModalPropaganda } from "../../ModalPropaganda";

export function PerrynaitorSection() {
  return (
    <div className="perrynaitorContainer">
      <motion.div
        className="perrynaitorHeader"
        /*         animate={{ y: 50 }}
        transition={{ ease: "linear", stiffness: 100, delay: 11 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} */
      >
        <h6>02.</h6>
        <u>perrynaitor</u>
      </motion.div>

      <div className="perrynaitorContent">
        <motion.div
          className="colLeft"
          /* transition={{ ease: "linear", stiffness: 100, delay: 14 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} */
        >
          <div className="img-wrapper">
            <div className="perryImg">
              <img src={perryImg} alt="" />
            </div>
          </div>
        </motion.div>

        <div className="colRight">
          <motion.p
          /*  animate={{ y: 50 }}
            transition={{ ease: "linear", stiffness: 100, delay: 13 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} */
          >
            Preparem seus corações (e o seu bolso) .... <br /> <br />
            Perrynaitor é a nova sensação do momento! Ele faz tudo, traduz
            textos para você, toca música para você, localiza lugares para você,
            escreve redações e seu TCC por você! E digo mais, resolve seus
            problemas amorozos por você!
          </motion.p>

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
