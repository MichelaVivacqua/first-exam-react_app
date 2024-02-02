import { Component } from "react";

class Content extends Component {
  state = {
    arrayOfFilms: [],
  };

  componentDidMount() {
    const { otherFilm } = this.props;
    this.fetchFilms(otherFilm);
  }

  fetchFilms = (otherFilm) => {
    fetch("http://www.omdbapi.com/?apikey=8d3cdf1b&s=" + otherFilm)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero della tua saga");
        }
      })
      .then((data) => {
        this.setState({
          arrayOfFilms: data.Search,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { arrayOfFilms } = this.state;

    return (
      <div className=" row d-flex flex-nowrap overflow-auto">
        {arrayOfFilms.map((film) => (
          <div
            key={film.imdbID}
            className="col-12 col-md-2 mb-2 text-center px-1"
          >
            <img
              src={film.Poster}
              alt={film.Title}
              style={{ width: "120px" }}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Content;
