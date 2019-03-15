/**
 * A test class for CSS experiments.
 */
export default customElements.define(
  "css-test",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = /*html*/ `


<style>
:host {
    width: 100%; /* Try 100vw */
    display: block;
    font-size: 1em;
}

span.bigger {
    font-size: 1.5em; /* Try rem to see the difference */
}

#content {
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    padding: 0em 1.5em 2em 1.5em;
    margin: 2em;
    height: calc(100vh - 200px); /* Try 100% */
    border-radius: 8px;
    background-color: #3f3f3f;
    color: #ff0000;
    font-size: 0.8em;
    overflow: auto;
}

#example {
    border: solid 1px #fff;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%; /* 100% works here because it fills the remaining parent's height! */
    min-height: 200px; /* Try without */
}

#example:before {
    z-index: 2;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* You cannot use Webpack file-loader here */
    background: rgba(255,255,255,0) url('/assets/static/znk.png') 0px 0px no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.1; /* All of this to allow background opacity */
    pointer-events: none; /* Make this layer not interactive and non blocking */
}

@media screen and (min-width: 768px) {
    :host {
        font-size: 1.5em;
    }
    #content {
        color: #fff;
    }
}

label input[type='checkbox'] + span {
    cursor: pointer
}
input[type='checkbox'] {
    display: none;
}
input[type='checkbox'] + span:after {
    display: inline-block;
    margin-left: 0.5em;
}
#content:lang(en) input[type='checkbox']:checked + span:after {
    content: 'Yes'
}
#content:lang(en) input[type='checkbox']:not(:checked) + span:after { /* :not() is useless and just for demo purpose here */
    content: 'No'
}
#content:lang(fr) input[type='checkbox']:checked + span:after {
    content: 'Oui'
}
#content:lang(fr) input[type='checkbox'] + span:after {
    content: 'Non'
}

</style>

<div id='content' lang='en'> <!-- Add attribute lang='fr 'to test the pseudo class selector -->
    <h1>Let us test some CSS!</h1>
    <h2>Because it's fun!!</h2>
    <p>But so damn technical...</p>
    <div id='example'>
        <span>Some superdiv with <span class='bigger'>centered</span> items!</span>
        <label>
            <input type='checkbox' />
            <span>I love CSS: </span>
        </label>
    </div>
</div>

        `;
    }
  }
);
