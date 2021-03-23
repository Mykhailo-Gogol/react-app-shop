import "modern-normalize/modern-normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Products from "./components/Products";

function App() {
  return (
    <div className="">
      <Header />
      <Main>
        <div className="d-flex flex-row">
          <Navigation />
          <Products />
        </div>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
