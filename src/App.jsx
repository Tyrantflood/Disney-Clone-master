import { useState } from "react";
import "./App.css";
import Header from "./Componets/Header";
import Slider from "./Componets/Slider";
import ProductionHouse from "./Componets/ProductionHouse";
import GenreMovieList from "./Componets/GenreMovieList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" min-h-screen">
      <Header />

      <Slider />

      <ProductionHouse />

      <GenreMovieList />
    </div>
  );
}

export default App;
