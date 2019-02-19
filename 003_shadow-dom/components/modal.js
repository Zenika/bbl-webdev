/**
 * Modal custom element showcasing ShadowDOM features.
 */
class Modal extends HTMLElement {
  constructor() {
    super()
    // Open mode makes this.shadowRoot available for this component
    this.attachShadow({ mode: 'open' });
    // For closed mode, use the returned reference
    // const shadowRoot = this.attachShadow({ mode: 'closed' });

    this.shadowRoot.innerHTML = /* html */`
    <style>
      #backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.75);
          z-index: 10;
          opacity: 0;
          pointer-events: none;
      }

      #modal {
          position: fixed;
          top: 15vh;
          left: 25%;
          width: 50%;
          background: white;
          z-index: 100;
          opacity: 0;
          pointer-events: none;
          padding: 1rem;
      }

      :host([opened]) #backdrop,
      :host([opened]) #modal {
          opacity: 1;
          pointer-events: all;
      }

      ::slotted(h1) {
          color: purple;
          font-size: 1.25rem;
          margin: 0
      }

      ::slotted(#message) {
          color: red;
      }
    </style>
    <div id="backdrop"></div>
    <div id="modal">
      <slot name="title">Header Slot</slot>
      <slot><span id="message">Default Slot</span></slot>
      <button id="btn-cancel">Cancel</button>
      <button id="btn-ok">OK</button>
    </div>
    `;

    this.shadowRoot.querySelector('#btn-cancel').addEventListener('click', this._cancel.bind(this))
    this.shadowRoot.querySelector('#btn-ok').addEventListener('click', this._ok.bind(this))
  }

  // connectedCallback () {} // not needed for this
  // disconnectedCallback () {} // not needed for this
  // static get observedAttributes () {
  //   return ['opened']
  // }
  // attributeChangedCallback (name, oldVal, newVal) {
  //   if (name === 'opened') console.log ('opened attribute', this.hasAttribute('opened'))
  // }

  open () {
    if (!this.hasAttribute('opened')) this.setAttribute('opened', '')
  }
  hide () {
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
    this.dispatchEvent(okEvent); // this one is attached to our component
  }

}

customElements.define('modal-dialog', Modal)
