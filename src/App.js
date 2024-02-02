import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import TVShows from "./components/TvShows";
import Content from "./components/Content";
import EditProfile from "./EditProfile";
import Setting from "./components/Setting";

// per vedere la pagina edit-profile,
// occorre commentare dalla riga 19 alla 37
// e decommentare dalla riga alla riga 39 alla riga 47

// per vedere la pagina settings,
// commentare dalla riga 19 alla 47
// e decommentare dalla riga 49 alla riga 60

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main style={{ backgroundColor: "#221f1f" }}>
        <TVShows />
        <h4 className="text-white ms-4">Trending Now</h4>
        <Content otherFilm="Spongebob" />
        <h4 className="text-white ms-4 mt-4">Watch it Again</h4>
        <Content otherFilm="Winnie" />
        <h4 className="text-white ms-4 mt-4">New Releases</h4>
        <Content otherFilm="Winx" />
      </main>
      <MyFooter />
    </>
  );
}

// function App() {
//   return (
//     <>
//       <main style={{ backgroundColor: "#221f1f" }}>
//         <EditProfile />
//       </main>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <header>
//         <MyNavbar />
//       </header>
//       <main>
//         <Setting />
//       </main>
//     </>
//   );
// }

export default App;
