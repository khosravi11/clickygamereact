import React, { Component } from "react";
import Clicky from "./components/Clicky";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Title from "./components/Title";
import cards from "./clicky.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    count: 0,
    highscore: 0

  };





  shuffle = array => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

  shuffleCards = (e, id) => {
    // Filter this.state.cards for cards with an id not equal to the id being removed
    let cardshuff = this.state.cards.map(card => {
      if(card.id === id && card.selected !== 1){
        card.selected = 1;
        this.setState({count: this.state.count + 1})
      } else {


      }

      return card;
    });
    // Set this.state.cards equal to the new cards array
    let addOrReset = parseInt(e.target.getAttribute('value'), 10);
    console.log(addOrReset);
    if (addOrReset === 0) {
      this.setState({count: this.state.count + 1})
    }
    else {
      if(this.state.count >= this.state.highscore){
        this.setState({highscore: this.state.count})
        let cardshuff = this.state.cards.map(card => {
          if(card.selected === 1){
            card.selected = 0;
          } else {


          }

          return card;
        });

      }
      this.setState({count: 0})
    }
    this.setState({ cardshuff });
  };

  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>

        <Counter counter={this.state.count} highscore={this.state.highscore}/>
        {console.log(this.shuffle(this.state.cards))}
        {this.state.cards.map(card => (
          <Clicky
            shuffleCards={this.shuffleCards}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            selected={card.selected}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
