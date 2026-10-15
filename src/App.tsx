import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Shop from "./pages/Shop";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
