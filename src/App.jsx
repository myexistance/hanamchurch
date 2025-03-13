import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About, Contact, Home, Services, Board, Column} from "./components/pages";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Noto Serif KR', serif;
    background-color: #fefefe;
  }
  
  #root {
    height: 100%;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  
  return (
    <>
    <div className="App">
      <AppWrapper>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/column" element={<Column />} />
          <Route path="/board" element={<Board/>} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
      <Footer />
      </AppWrapper>
      
    </div>
    </>
  );
}

export default App;
