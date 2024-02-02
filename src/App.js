import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import TVShows from "./components/TvShows";
import Content from "./components/Content";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main style={{ backgroundColor: "#221f1f" }}>
        <TVShows />
        <h4 className="text-white ms-4">Trending Now</h4>
        <Content otherFilm="007" />
        <h4 className="text-white ms-4 mt-4">Watch it Again</h4>
        <Content otherFilm="Harry" />
        <h4 className="text-white ms-4 mt-4">New Releases</h4>
        <Content otherFilm="Star" />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
