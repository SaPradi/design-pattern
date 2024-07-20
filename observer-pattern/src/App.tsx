import './App.css'
import AddProduct from './page/AddProduct'
import RemoveProduct from './page/RemovePro'
import Inventory from './page/Inventory'

function App() {

  return (
    <div className='flex items-center justify-center flex-col'>
      <AddProduct/>
      <RemoveProduct/>
      <Inventory/>
    </div>
  )
}

export default App
