import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isToggledOn: false
  }
  handleCardClick = () => {
    return this.setState(prevState => ({
      isToggledOn: !prevState.isToggledOn
    }))
  }

  getHp = () => {
    return this.props.pokemon.stats.map(stat => {
      if (stat.name === 'hp') {
      return stat.value
      }
    })
  }

  render() {
    const { name } = this.props.pokemon
    const img = this.props.pokemon.sprites
    return (
      <Card>
        <div onClick={this.handleCardClick}>
          <div className="image">
            <img src={!this.state.isToggledOn ? img.front : img.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
