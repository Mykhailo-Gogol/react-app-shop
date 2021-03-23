import "./App.css";
import "modern-normalize/modern-normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Main className="d-flex">
        <Navigation className="navigation" />
        <Products className="products" />
      </Main>
      <Footer className="footer" />
    </div>
  );
}

export default App;
