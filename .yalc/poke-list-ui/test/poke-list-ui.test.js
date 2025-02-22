import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../poke-list-ui.js';

describe('PokeListUi', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture(html`<poke-list-ui></poke-list-ui>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<poke-list-ui></poke-list-ui>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture(html`<poke-list-ui header="attribute header"></poke-list-ui>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<poke-list-ui></poke-list-ui>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
