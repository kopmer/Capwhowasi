//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Kcf/Footer';
import Header from './components/Kcf/Header';
import KcfApp from './components/pages/KcfApp';
import UploadPage from './components/pages/UploadPage';
function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<KcfApp/>}></Route>
            <Route path="/UploadPage" element={<UploadPage/>}></Route>
            <Route path="/resultPage" element={<resultPage/>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
