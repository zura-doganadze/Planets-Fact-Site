import { Route, Routes, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header.tsx";
import Home from "./pages/Home.tsx";
import Planet from "./pages/Planet.tsx"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:planet" element={<Planet />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
