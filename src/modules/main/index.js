import React from "react";
import "./index.css";
class Cards extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("http://academy-video-api.herokuapp.com/content/items")
      .then((response) => response.json())
      .then((movieList) => {
        this.setState({ movies: movieList });
      });
  }

  render() {
    return (
      <section className="Cards">
        {this.state.movies.map(({ id, image, title, description }) => (
          <div className="card" key={id}>
            <img src={image} alt="" className="card--image" />
            <div className="card--wrapper">
              <h4>{title}</h4>
              <p>{description}</p>
              <button>Favourite</button>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
export default Cards;
