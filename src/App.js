import React, { Component } from "react";
import ImageBox from "./components/ImageBox";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters: characters,
    score: 0,
    highScore: 0,
    clicked: []
  };

  // When an image is clicked...
  imageClick = (id) => {
    if (this.state.clicked.indexOf(id) == -1) {

      // Push clicked ID to the clicked array
      this.state.clicked.push(id);

      // Update the score
      this.setState({ score: this.state.score + 1 });
      if (this.state.score == 11) {
        alert("You win!!!!");
        this.resetGame();
      };

    } else {
      alert("You clicked the same image twice! Oh no!");
      this.resetGame();
    }
    // Shuffle the characters
    this.shuffle(this.state.characters);

  };

  // Shuffle the images
  shuffle = (array) => {
    array.sort(function () { return 0.5 - Math.random() })
    this.setState({ characters: array })
  };

  // Game reset
  resetGame = () => {
    // If the current score is higher than the high score, set the high score to the current score
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score })
    };
    this.setState({
      score: 0,
      clicked: []
    });
  }

  // Map over this.state.characters and render a Card component for each character object
  render() {
    return (
      <div className="container">
        <div className="row Header">
          <h3>The Office Clicky Game</h3>
          <p>Your Score: {this.state.score}</p>
          <p>High Score: {this.state.highScore}</p>
        </div>
        <div className="row">
        {this.state.characters.map(character => (
          <ImageBox
            imageClick={this.imageClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          >
         </ImageBox>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
