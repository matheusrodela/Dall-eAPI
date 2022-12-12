import './App.css';
import { Routes, Route} from 'react-router-dom';

//components
import { Header } from "./components/header/index";
import { BackgroundImages } from './components/backgroundImages';
import { Title} from './components/title';
import { GenerateImage } from './components/generateImage';
import { EditImage } from './components/editImage';
import { Tips } from './components/tips';
import { Footer } from './components/footer';


function App() {
  return (
    <div className='appMain'>
      <Header/>
      <main>
        <BackgroundImages/>
        <Title/>
        <Routes>
          <Route path='/' element={<GenerateImage/>}/>
          <Route path='/editImage' element={<EditImage/>}/>
        </Routes>
        <Tips/>
      </main> 
      <Footer/>
    </div>
  )
}

export default App

//