import React from "react";
import { ThemeProvider } from "styled-components";
import { Light } from "./styles/themes";
import Globals from "./styles/globals";
import { Route, Routes } from "react-router-dom";


//Pages
import Home from "./pages/Home";
import MainMenu from "./pages/MainMenu";
import TableReservations from "./pages/TableReservations.tsx";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import AdminPanel from "./pages/AdminPanel";


function App() {
  return (
    <>
      <ThemeProvider theme={Light}>
        <Globals />
        <main className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MainMenu />} />
              <Route path="/reservations" element={<TableReservations />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/admin" element={<AdminPanel/>} />

          </Routes>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
