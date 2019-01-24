'use strict'

/**
 * Very basic Hello World button.
 */
export class HelloWorld extends HTMLElement {
    // Constructor
    constructor() {
        super();
        this.sayHello = this.sayHello.bind(this);
    }
    // Properties
    get name() {
        return this.getAttribute('name');
    }
    set name(name) {
        this.setAttribute('name', name)
    }
    // Methods
    sayHello() {
        alert(`Hello ${this.name}!`);
    }
    // Custom element callbacks configuration
    connectedCallback() {
        this.innerHTML = `<button class="hello">Hello ${this.name}</button>`;
        this.querySelector('.hello').addEventListener('click', this.sayHello);
    }
    disconnectedCallback() {
        this.querySelector('.hello').removeEventListener('click', this.sayHello);
    }
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            const helloBtn = this.querySelector('.hello');
            if (!helloBtn) return;
            this.querySelector('.hello').innerText = `Bye ${oldValue}, Hello ${newValue}`;
        }
    }
}

customElements.define('hello-world', HelloWorld);

export default HelloWorld;

