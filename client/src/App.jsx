import React from "react";
import { ThemeProvider } from "styled-components";
import { Light } from "./styles/themes";
import Globals from "./styles/globals";
import { Route, Routes } from "react-router-dom";

// Lazy-loaded page components
const Home = React.lazy(() => import("./pages/Home"));
const MainMenu = React.lazy(() => import("./pages/MainMenu"));
const TableVisualization = React.lazy(() => import("./pages/Reservations"));
const Shop = React.lazy(() => import("./pages/Shop"));
const Contact = React.lazy(() => import("./pages/Contact"));
const AdminPanel = React.lazy(() => import("./pages/AdminPanel"));

function App() {
  return (
    <>
      <ThemeProvider theme={Light}>
        <Globals />
        <main className="App">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MainMenu />} />
              <Route path="/reservations" element={<TableVisualization />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </React.Suspense>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;