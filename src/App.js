
// Components
import Home from "./pages/Home";
import Nav from "./components/Nav";

// Routes
import { Route, Routes } from 'react-router-dom'

// Styles
import GlobalStyles from "./components/Globalstyles";

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path={"/ignite"} element={<Home />}></Route>
        <Route path={"/game/:id"} element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
