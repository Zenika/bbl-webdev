'use strict';

import tpl from './modal.html';

/**
 * Modal custom element showcasing ShadowDOM features.
 */
export default class Modal extends HTMLElement {
  constructor() {
    super()
    // Open mode makes this.shadowRoot available for this component
    this.attachShadow({ mode: 'open' });
    // For closed mode, use the returned reference
    // const shadowRoot = this.attachShadow({ mode: 'closed' });

    this.shadowRoot.appendChild(tpl.content.cloneNode(true));

    this.shadowRoot.querySelector('#btn-cancel').addEventListener('click', this._cancel.bind(this))
    this.shadowRoot.querySelector('#btn-ok').addEventListener('click', this._ok.bind(this))
  }

  // connectedCallback () {} // not needed for this
  // disconnectedCallback () {} // not needed for this
  static get observedAttributes () {
    return ['opened']
  }
  attributeChangedCallback (name, oldVal, newVal) {
    if (name === 'opened') console.log ('opened attribute', this.hasAttribute('opened'))
  }

  open () {
    // Trigger animation / transition
    this.setAttribute('opening', '');
    setTimeout(() => {
      this.removeAttribute('opening');
    }, 700);
    if (!this.hasAttribute('opened')) this.setAttribute('opened', '')
  }
  hide () {
    // Trigger animation / transition
    this.setAttribute('closing', '');
    setTimeout(() => {
      this.removeAttribute('closing');
    }, 1600);
    if (this.hasAttribute('opened')) this.removeAttribute('opened')
  }

  // 2 ways to dispatch events
  _cancel (e) {
    this.hide()
    // The 'composed: true' configuration allows the event to leave the shadow DOM tree
    // You can set to it false to see the effect
    const cancelEvent = new Event('cancel', { bubbles:  true, composed: true })
    e.target.dispatchEvent(cancelEvent)
  }

  _ok (e) {
    this.hide()
    const okEvent = new Event('ok')
    this.dispatchEvent(okEvent); // this one is triggered from our component
  }

}

customElements.define('modal-dialog', Modal)
