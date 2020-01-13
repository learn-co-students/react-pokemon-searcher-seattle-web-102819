import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ''
  }

  POKE_URI = 'http://localhost:3000/pokemon'

  fetchPokemon = () => {
    fetch(this.POKE_URI)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      return this.setState(prevState => ({
        pokemon: data.filter( pokemon => { return pokemon.name.includes(prevState.searchTerm)})
      }))
    })
  }

  componentDidMount() {
    this.fetchPokemon()
  }
  

  handleSearchTerm = (event) => {
    return this.setState({
      searchTerm: event.target.value
    }, this.fetchPokemon())
  }
  
  addPokemon = (pokemon) => {
    console.log('adding new pokemon', pokemon)
    return this.setState(prevState => ({
      pokemon: [...prevState.pokemon, pokemon]
    }))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onAddPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleSearchTerm} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
