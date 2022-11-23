import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GetMovies from "./GetMovies";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <GetMovies />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
