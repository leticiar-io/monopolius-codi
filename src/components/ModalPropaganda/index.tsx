import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from "react-icons/ai";
import "./styles.css";

export function ModalPropaganda() {
  return (
   <Dialog.Portal>
     <Dialog.Overlay className="DialogOverlay" />
     <Dialog.Content className="DialogContent">
      <Dialog.Title className="DialogTitle">Propaganda do incrível Perrynaitor</Dialog.Title>
       <Dialog.Close asChild>
         <button className="IconButton" aria-label="Close">
           <AiOutlineClose />
         </button>
       </Dialog.Close>

     <iframe width="960" height="550" src="https://www.youtube.com/embed/ji6Ds998i_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       
     </Dialog.Content>
   </Dialog.Portal>  
  )
}
