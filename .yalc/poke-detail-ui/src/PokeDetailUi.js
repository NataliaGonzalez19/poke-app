import { html, css, LitElement } from 'lit';

export class PokeDetailUi extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--poke-list-ui-text-color, #000);
    }
    .card {
      background-color: #fff;
      border-radius: 2px;
      // display: inline-block;
      height: 300px;
      width: 100%;
      margin: 1rem;
      position: relative;
      text-align: center;
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.12),
        0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .card:hover {
      box-shadow:
        0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.24);
    }

    .card img {
      width: 50%;
    }

    .detail-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    .card-content {
      width: 50%;
    }

    #boton-volver {
      background-color: #ff5733;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      margin: 20px auto;
      display: block;
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
  _handleClick(evt, pokemon = {}) {
    this.dispatchEvent(
      new CustomEvent(evt, {
        detail: { name: pokemon.name },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div class="banner">
      </div>
      ${this.pokemons[0]?.evolutions?.map(
        pkmon => html`
          <div
            class="card"
            @click=${() => this._handleClick('pokemon-selected', pkmon)}
          >
            <div class="detail-content">
              <div class="card-content">
                <h2>${pkmon.name}</h2>
              </div>
              <div class="card-content">
                <img src="${pkmon.image}" />
              </div>
            </div>
          </div>
        `,
      )}
      <button id="boton-volver" @click=${() => this._handleClick('back-list')}>Volver</button>
    `;
  }
}