import { LitElement } from 'lit';

export class PokedexDm extends LitElement {
 
  static properties = {
    url: { type: String },
    pokemons: { type: Array },
    pokemonDetails: { type: Object },
  };

  constructor() {
    super();
    this.url = '';
    this.pokemons = [];
    this.pokemonDetails = {};
  }


  async searchPokemonList() {
    try{
      const response = await fetch(this.url);
      const data = await response.json();
      this.pokemons = data
      //console.log("🚀 ~ PokedexDm ~ searchPokemonList ~ this.pokemons = data:", this.pokemons = data)
      this._handleClickEvent('poke-list-search',this.pokemons);
    } catch(e){
      console.error("Error :",e);
      this._handleErrorEvent('poke-list-error');
    }
  }

  async searchPokemonDetail(pokemon) {
    try{
      const response = await fetch(`http://localhost:3002/pokemon?name=${pokemon}`);
      const data = await response.json();
      this.pokemonDetails = data
      //console.log("🚀 ~ PokedexDm ~ searchPokemonList ~ this.pokemons = data:", this.pokemons = data)
      this._handleClickEvent('poke-detail-search',this.pokemonDetails);
    } catch(e){
      console.error("Error :",e);
      this._handleClickEvent('poke-detail-error');
    }
  }

  _handleClickEvent(evt,detail = {}){
    this.dispatchEvent(new CustomEvent(evt, {
      detail,
      bubbles: true, 
      composed: true
    }));
  }

}
