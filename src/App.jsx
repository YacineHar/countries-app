import './App.css'
import NavBar from './components/NavBar'
import AppRouter from './routing/AppRouter'

function App() {
  return (
    <div className='bg-light min-vh-100 pb-4'>
      <NavBar />
      <AppRouter />
    </div>
  )
}

export default App
