import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import About from "./Pages/About";
import Coffees from "./Pages/Coffees";
import Contact from "./Pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/coffees" element={<Coffees />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
