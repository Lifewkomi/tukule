import React from "react";
import { ThemeProvider } from "styled-components";
import { Light } from "./styles/themes";
import Globals from "./styles/Globals";
import { Route, Routes } from "react-router-dom";


//Pages
import Home from "./Pages/Home";
import MainMenu from "./pages/MainMenu";
// import TableReservations from "./pages/TableReservations";
import Offers from "./pages/Offers";
import Shop from "./pages/Shop";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <ThemeProvider theme={Light}>
        <Globals />
        <main className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MainMenu />} />
              {/* <Route path="/reservations" element={<TableReservations />} /> */}
              <Route path="/offers" element={<Offers />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contacts" element={<Contact />} />
          </Routes>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
