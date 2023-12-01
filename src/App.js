//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Kcf/Footer';
import Header from './components/Kcf/Header';
import KcfApp from './components/pages/KcfApp';
import UploadPage from './components/pages/UploadPage';
import ResultPage from  './components/pages/ResultPage';
import ListPage from  './components/pages/ListPage';
function App() {

  return (
    <div className="App">
        
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<KcfApp/>}></Route>
            <Route path="/UploadPage" element={<UploadPage/>}></Route>
            <Route path="/ResultPage" element={<ResultPage/>}></Route>
            <Route path="/ListPage" element={<ListPage/>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
    </div>
    
    
  );
}

export default App;
