import { html, css, LitElement } from 'lit';

export class ModalInfoUi extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    .modal {
      display: flex;
      background: white;
      padding: 20px;
      border-radius: 8px;
      min-width: 300px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .close-btn {
      background: #ffd000;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }
    :host([open]) .backdrop {
      visibility: visible;
      opacity: 1;
    }
    img {
      width: 60%;
    }
  `;

  static properties = {
    open: { type: Boolean, reflect: true },
    textInfo: { type: String, attribute: 'text-info' },
  };

  constructor() {
    super();
    this.open = false;
    this.textInfo = '';
  }

  closeModal() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('modal-close', {
        bubbles: true,
        composed: true,
      }),
    );
  }
  openModal() {
    this.open = true;
  }

  render() {
    return html`
      <div class="backdrop" @click=${this.closeModal}>
        <div class="modal" @click=${e => e.stopPropagation()}>
          <slot></slot>
          <img src="./img/warning.jpg" alt="Pokedex Banner" />
          <p>${this.textInfo}</p>
          <button class="close-btn" @click=${this.closeModal}>Cerrar</button>
        </div>
      </div>
    `;
  }
}
