
import './home.css';

import useModalContext from '../hook/useModalContext';

const Home: React.FC = () => {

  const { openModal } = useModalContext()

  return (

    <main>

      <h1>Modal Reutilizable</h1>
      <div className='patterns-text'>
        <p>Patterns</p>
        <ul>
          <li>
            Render Props
          </li>
          <li>Compound</li>
          
        </ul>
     

      </div>

      <button onClick={()=>openModal()}> 
        Abrir Modal
      </button>

    </main>
  )
}

export default Home
