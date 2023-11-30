import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "./Components/Header.tsx";
import Home from "./pages/Home.tsx";
import Planet from "./pages/Planet.tsx";
function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:planet" element={<Planet />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
