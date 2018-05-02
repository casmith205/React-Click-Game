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
    this.setState({ score: this.state.score + 1 });
  };

  // clickCharacter = id => {
  //   const characters = this.state.characters.filter(character => character.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ characters });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container">
        <h3>Clicky Game</h3>
        <p>{this.state.score}</p>
        {this.state.characters.map(character => (
          <Card
            imageClick={this.imageClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            >
          </Card>
        ))}
      </div>
    );
  }
}

export default App;
