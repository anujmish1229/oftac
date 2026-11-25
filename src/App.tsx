import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Shop from "./pages/Shop";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
