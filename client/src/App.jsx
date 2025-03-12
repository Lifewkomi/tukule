import Globals from "./styles/globalStyles.jsx";
import { Light } from "./styles/themes.jsx";

import { ThemeProvider } from "styled-components";
import Lenis from "lenis";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import Home from "./Pages/Home";
import Reservations from "./Pages/Reservations";
import Offers from "./Pages/Offers";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";

const MainMenu = lazy(() => import("./Pages/MainMenu"));

function App() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   lenis.on("scroll", (e) => {
  //     console.log(e);
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <>
      <ThemeProvider theme={Light}>
        <Globals />
        <main className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/menu" element={<MainMenu />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contacts" element={<Contact />} /> */}
            </Routes>
          </Suspense>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;


