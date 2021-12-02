import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Price from "./components/Price";
import Process from "./components/Process";
import Strategies from "./components/Strategies";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Main />
        <Process />
        <Strategies />
        <Price />
        <Clients />
        <Footer />
      </div>
    </div>
  );
};

export default App;
 