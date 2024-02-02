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
      <main>
        <TVShows />
        <h4>Trending Now</h4>
        {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"> */}
        <Content />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
