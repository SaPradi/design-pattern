import './App.css'
import Home from './pages/Home'
import Modal from './components/Modal';
import { ModalProvider } from './providers/ModalProvider';

function App() {
  return (
    <ModalProvider>
        <Modal renderContent={() => <div>Contenido del modal</div>} />
        <Home/>
    </ModalProvider>
  )
}

export default App
