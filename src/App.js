import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import TVShows from "./components/TvShows";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <TVShows />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
