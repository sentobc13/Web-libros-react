
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import ListNews from './components/ListNews'


const API_URL = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=ODg6YIGnkG7BRGGEg4VEKacGnDIQPAMH'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/list' element={<ListNews/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
