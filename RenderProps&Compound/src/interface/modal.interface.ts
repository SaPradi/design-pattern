export interface ModalContextProps {
    isOpen: boolean;
    animationStatus: 'in' | 'out' | null;
    openModal: () => void;
    closeModal: () => void;
}