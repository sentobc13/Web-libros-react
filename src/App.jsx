
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ListNews from './components/ListNews/ListNews'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import { GlobalProvider } from './components/context/GlobalState'


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
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
