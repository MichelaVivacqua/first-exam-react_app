import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main></main>
      <MyFooter />
    </>
  );
}

export default App;
