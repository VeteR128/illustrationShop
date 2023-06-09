import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Works } from "./pages/Works";
import { Faq } from "./pages/Faq";
import { Layout } from "./components/Layout/Layout";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="works" element={<Works />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
