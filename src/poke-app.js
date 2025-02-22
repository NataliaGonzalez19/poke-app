import { LitElement, html, css } from 'lit';
import 'pokedex-dm/pokedex-dm.js';
import 'poke-list-ui/poke-list-ui.js';
import 'poke-detail-ui/poke-detail-ui.js';
import 'modal-info-ui/modal-info-ui.js';                  

class PokeApp extends LitElement {

  static properties = {
    url: { type: String },
    pokemonDetail: { type: Boolean },
    modalVisible: { type: Boolean },
    pokemonList: { type: Array },
    pokemonListDetail: { type: Array },
    modalTextContent: { type: String }
  };

  constructor() {
    super();
    this.url = 'http://localhost:3002/pokemon';
    this.pokemonDetail = false;
    this.modalVisible = false;
    this.pokemonList = [];
    this.pokemonListDetail = [];
    this.modalTextContent = 'Si esta repetido el pokemon lo puedes cambiar en una estacion pokemon';
  }

  static styles = css`
    nav { background: #eee; padding: 10px; }
    nav a { margin-right: 10px; text-decoration: none; color: #333; }
    .img2{
      width: 100%;
      max-height: 300px;
      object-fit: contain; 
      display: block;
      margin: 0 auto; 
    }

    .img1{
      width: 100%;      
      max-height: 300px; 
      object-fit: contain; 
      display: block;
      margin: 0 auto; 
    }
  `;

  firstUpdated() {
    this.dm = this.shadowRoot.querySelector('pokedex-dm');
    if (this.dm) {
      this.dm.searchPokemonList();
    } else {
      console.error('pokedex-dm no encontrado en el Shadow DOM');
    }
  }

  _createListPokemons({ detail }) {
    this.pokemonList = detail;
  }

  _searchPokemon({detail}){
    this.pokemonDetail = true;
    this.dm.searchPokemonDetail(detail);
  }

  _changeModal(){
    this.modalVisible = true;
  }

  _getListPokemons() {
    return this.pokemonDetail 
      ? html`<img class="img1" src="./img/pokedex-banner.png" alt="Pokedex Banner"/><poke-detail-ui .pokemons=${this.pokemonListDetail} @pokemon-selected=${this._changeModal} @back-list=${()=>{this.pokemonDetail = false}}></poke-detail-ui>` 
      : html`<img class="img2" src="./img/banner.png" alt="Pokedex Banner" /><poke-list-ui .pokemons=${this.pokemonList} @pokemon-selected=${this._searchPokemon}></poke-list-ui>`;
  }

  render() {
    return html`
      ${this._getListPokemons()}
      <pokedex-dm 
        .url="${this.url}" 
        @poke-list-search="${this._createListPokemons}"
        @poke-detail-search="${(evt)=>{this.pokemonListDetail = evt.detail}}"
        >
      </pokedex-dm>
      <modal-info-ui
        ?open=${this.modalVisible}
        .textInfo="${this.modalTextContent}"
        @modal-close="${()=>{this.modalVisible = false}}"
      ></modal-info-ui>
    `;
  }
}

customElements.define('poke-app', PokeApp);