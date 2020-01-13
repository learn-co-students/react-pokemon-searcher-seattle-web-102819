import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
     //array of pokemon objects
    myPokemon: [],
    search: ''
   
  }

  //on mounting, will fetch and load state with pokemon objects sorted by name
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemonCollection => this.setState({ myPokemon: pokemonCollection.sort((a, b) => a.name.localeCompare(b.name) )}))
      .catch(e => console.error(e))
  }

  flipImage = pokemon => {
    this.setState(prevState => {
      return { myPokemon: prevState.myPokemon.map(p => {
        return p.id === pokemon.id? { ...p, isClicked: !p.isClicked} : p;
      })}
    })
  }


  handleSearchChange = event => {
    this.setState({ search: event.target.value })
  }

  addPokemon = pokemon => {
    this.setState({ myPokemon: [...this.state.myPokemon, pokemon] })
  }

  findPokemon = () => {
    if (this.state.search.length < 1) {
      return this.state.myPokemon
    } else {
      return (
        this.state.myPokemon.filter(p => p.name.includes(this.state.search))
      )
    }
  }

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleSearchChange} />
        <br />
        <PokemonCollection pokemon={this.findPokemon()} flipImage={this.flipImage}/>
      </Container>
    )
  }
}

export default PokemonPage
