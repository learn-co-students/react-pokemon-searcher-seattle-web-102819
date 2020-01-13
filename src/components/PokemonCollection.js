import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  populatePokemon() {
    return this.props.pokemon.map((poke, index) => {
      return <PokemonCard pokemon={poke} key={index} />
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.populatePokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
