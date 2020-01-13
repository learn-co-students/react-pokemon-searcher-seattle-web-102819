import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ({ pokemon, flipImage }) => (
  <Card.Group itemsPerRow={6}>
    {pokemon.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} flipImage={flipImage} />
    ))}
  </Card.Group>

)

export default PokemonCollection
