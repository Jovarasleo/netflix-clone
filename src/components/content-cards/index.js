import React from "react";
import Button from "../button";
import "./index.css";
class Cards extends React.Component {
  state = {
    movies: [],
    favourite: JSON.parse(localStorage.getItem("favArr")) || [],
  };
  componentDidMount() {
    fetch("http://academy-video-api.herokuapp.com/content/items")
      .then((response) => response.json())
      .then((movieList) => {
        this.setState({ movies: movieList });
      });
  }
  toggleFavourite = (id) => {
    if (!this.state.favourite.includes(id)) {
      this.setState({ favourite: [...this.state.favourite, id] }, () => {
        localStorage.setItem("favArr", JSON.stringify(this.state.favourite));
      });
    } else {
      let filteredArr = this.state.favourite.filter((singleFavourite) => {
        return singleFavourite !== id;
      });
      this.setState({ favourite: filteredArr }, () => {
        localStorage.setItem("favArr", JSON.stringify(this.state.favourite));
      });
    }
  };
  render() {
    const { favourite, movies } = this.state;
    return (
      <section className="Cards">
        {movies.map(({ id, image, title, description }) => (
          <div className="card" key={id}>
            <img src={image} alt="" className="card--image" />
            <div className="card--wrapper">
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
              <Button
                onClick={() => this.toggleFavourite(id)}
                className={favourite.includes(id) ? "outline" : ""}
              >
                {favourite.includes(id) ? "Remove 💔" : "Favorite"}
              </Button>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
export default Cards;
