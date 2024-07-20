import './App.css'
import AddProduct from './page/AddProduct'
import RemoveProduct from './page/RemoveProduct'
import Inventory from './page/Inventory'

function App() {

  return (
    <div className='flex gap-4 items-center justify-center flex-col bg-slate-950 h-screen'>
      <AddProduct/>
      {/* <RemoveProduct/> */}
      <Inventory/>
    </div>
  )
}

export default App
