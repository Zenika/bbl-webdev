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
        this._modalNamePlaceholder.innerText = this.name;
        this._modal.open();
    }
    // Custom element callbacks configuration
    connectedCallback() {
        this.innerHTML = /* html */`
            <button class="hello">Hello ${this.name}</button>
        `;

        // Adding an Hello World modal if it does not exist
        if (!(this._modal = document.querySelector('#hello-dialog'))) {
            document.body.insertAdjacentHTML('beforeend', /* html */`
                <modal-dialog id="hello-dialog">
                    <h1 slot="title">Hello!</h1>
                    <p id="message">Hello <span class="hello-name">World</span>!</p>
                </modal-dialog>
            `);
            this._modal = document.querySelector('#hello-dialog');
            this._modalNamePlaceholder = this._modal.querySelector('.hello-name');
            this._modal.addEventListener('ok', (e) => console.log('ok', e.target))
            this._modal.addEventListener('cancel', (e) => console.log('cancel', e.target))
        }
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

