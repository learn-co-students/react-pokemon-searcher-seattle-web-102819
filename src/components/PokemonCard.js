import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  showHP = () => {
    const hp = this.props.pokemon.stats.find(obj => obj.name === 'hp')
    // console.log(hp.value)
    return hp.value
  }

  render() {
    return (
      <Card onClick={() => this.props.flipImage(this.props.pokemon)}>
        <div>
          <div className="image">
            <img src={this.props.pokemon.isClicked? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP: {this.showHP()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
