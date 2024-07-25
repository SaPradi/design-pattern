import { ReactNode, useState } from "react";
import ModalContext from "../context/ModalContext";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [animationStatus, setAnimationStatus] = useState<'in'|'out'|null>(null);

  const openModal = () => {
    setAnimationStatus('in');
    setTimeout(() => {
      setIsOpen(true);
    }, 500); 
  }

  const closeModal = () => {
    setAnimationStatus('out');
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <ModalContext.Provider value={{ animationStatus, isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
