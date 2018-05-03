import React, { Component } from "react";
import Card from "./components/Card";
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
      // this.state.characters.forEach(image =>)
      this.setState({ score: this.state.score + 1 })

      // push clicked id to the clicked array
      this.state.clicked.push(id)
      // If the current score is higher than the high score, set the high score to the current score
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score })
      }

      
    } else if (this.state.score >= 12){
      alert("You win!!!!")
    } else {
      alert("You clicked the same image twice! Oh no!")
    }
    // Shuffle the characters
    this.shuffle(this.state.characters);
    this.resetGame();
  };

  // Shuffle the images
  shuffle = (array) => {
    array.sort(function () { return 0.5 - Math.random() })
    this.setState({ characters: array })
  };

  // Game reset
  resetGame = () => {
    this.setState({ 
      score: 0,
      clicked: []
    });

  }

  // Map over this.state.characters and render a Card component for each character object
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
          >
          </Card>
        ))}
      </div>
    );
  }
}

export default App;
