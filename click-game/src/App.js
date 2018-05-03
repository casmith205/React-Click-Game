import React, { Component } from "react";
import Card from "./components/Card";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters: characters,
    score: 0,
    highScore: 0
  };

  imageClick = () => {
    this.setState({ score: this.state.score + 1 })
    this.shuffle(this.state.characters);
  };

  shuffle = (array) => {
    array.sort(function() { return 0.5 - Math.random() })
    this.setState({characters : array})
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container">
        <h3>Clicky Game</h3>
        <p>{this.state.score}</p>
        <p>{this.state.highScore}</p>
        {this.state.characters.map(character => (
          <Card
            imageClick={this.imageClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            // shuffle={this.shuffle}
            >
          </Card>
        ))}
      </div>
    );
  }
}

export default App;
