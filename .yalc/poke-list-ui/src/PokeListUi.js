import { html, css, LitElement } from 'lit';

export class PokeListUi extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--poke-list-ui-text-color, #000);
    }
    .card {
      background-color: #fff;
      border-radius: 2px;
      display: inline-block;
      height: 300px;
      width: 200px;
      margin: 1rem;
      position: relative;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .card:hover {
      box-shadow:
        0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.24);
    }

    .card img {
      width: 70%;
    }
  `;

  static properties = {
    pokemons: { type: Array },
  };

  constructor() {
    super();
    this.pokemons = [];
  }

  /** Método para manejar el clic en una tarjeta */
  _handleClick(pokemon) {
    this.dispatchEvent(new CustomEvent('pokemon-selected', {
      detail: pokemon.name,
      bubbles: true, 
      composed: true 
    }));
  }

  render() {
    return html`
      ${this.pokemons.map(
        pokemon => html`
          <div class="card" @click=${() => this._handleClick(pokemon)}> 
            <div class="card-content">
              <h2>${pokemon.name}</h2>
              <img src="${pokemon.image}" />
              <p>${pokemon.type}</p>
            </div>
          </div>
        `,
      )}
    `;
  }
}