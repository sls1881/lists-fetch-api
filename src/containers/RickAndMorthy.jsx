import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { getCharacters } from '../services/RickAndMortyApi';

export default class RickAndMorthy extends Component {
  //State
  state = {
    characters: [],
    loading: true,
  };

  //Component did mount fetch and setState
  async componentDidMount() {
    const characters = await getCharacters();
    this.setState({
      characters,
      loading: false,
    });
  }

  render() {
    //Destructuring state
    const { characters, loading } = this.state;
    if (loading) return <h1>Loading...</h1>;
    return <CharacterList characters={characters} />;
  }
}
