import { createContext } from "react";
import { ModalContextProps } from "../interface/modal.interface";


const defaultValue: ModalContextProps = {
  isOpen: false,
  animationStatus:null,
  openModal: () => { },
  closeModal: () => { },
};


const ModalContext = createContext<ModalContextProps>(defaultValue);

export default ModalContext;