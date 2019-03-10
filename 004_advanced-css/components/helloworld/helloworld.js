"use strict";

import tpl from "./helloworld.html";

/**
 * Very basic Hello World button.
 */
export class HelloWorld extends HTMLElement {
  // Constructor
  constructor() {
    super();
    // Attaching shadow and template
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(tpl.content.cloneNode(true));
    // Creating shortcuts
    this._nameForm = this.shadowRoot.querySelector("#name");
    this._nameInput = this._nameForm.querySelector("input");
    this._helloBtn = this.shadowRoot.querySelector("#hello");
    // Binding functions
    this.updateName = this.updateName.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }
  // Properties
  get name() {
    return this.getAttribute("name");
  }
  set name(name) {
    this.setAttribute("name", name);
  }
  // Methods
  sayHello() {
    this._modalNamePlaceholder.innerText = this.name;
    this._modal.open();
  }
  updateName(e) {
    if (e) e.preventDefault();
    this.name = this._nameInput.value || 'World';
    this._nameInput.value = '';
  }
  // Custom element callbacks configuration
  connectedCallback() {
    // Adding an Hello World modal if it does not exist
    if (!(this._modal = document.querySelector("#hello-dialog"))) {
      document.body.insertAdjacentHTML(
        "beforeend",
        /* html */ `
                <modal-dialog id="hello-dialog">
                    <h1 slot="title">Hello!</h1>
                    <p id="message">Hello <span class="hello-name">World</span>!</p>
                </modal-dialog>
            `
      );
      this._modal = document.querySelector("#hello-dialog");
      this._modalNamePlaceholder = this._modal.querySelector(".hello-name");
      this._modal.addEventListener("ok", e => console.log("ok", e.target));
      this._modal.addEventListener("cancel", e => console.log("cancel", e.target));
    }
    // Adding listeners
    this._nameForm.addEventListener("submit", this.updateName);
    this._helloBtn.addEventListener("click", this.sayHello);
  }
  disconnectedCallback() {
    // Cleaning up listeners
    this._nameForm.removeEventListener("submit", this.updateName);
    this._helloBtn.removeEventListener("click", this.sayHello);
  }
  static get observedAttributes() {
    return ["name"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "name":
        this._helloBtn.innerText = `${oldValue && oldValue !== newValue ? "Bye " + oldValue + ", " : ""}Hello ${newValue}`;
        break;
      default:
    }
  }
}

customElements.define("hello-world", HelloWorld);

export default HelloWorld;
