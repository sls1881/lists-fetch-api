import React, { Component } from 'react';
import CharacterDetailItem from '../components/details/CharacterDetailItem';
import { getCharacter } from '../services/RickAndMortyApi';

export default class DetailContainer extends Component {
  state = {
    character: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const character = await getCharacter(id);
    this.setState({
      character,
    });
  }

  render() {
    const { character } = this.state;
    return (
      <div>
        <CharacterDetailItem character={character} />
      </div>
    );
  }
}
