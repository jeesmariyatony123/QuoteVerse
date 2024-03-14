import './App.css'
import Home from './Pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Liked from './Pages/Liked';
import QuotesList from './components/QuotesList';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/liked' element={<Liked />} />
        <Route path='/quotelist' element={<QuotesList />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>

    </>
  )
}

export default App
