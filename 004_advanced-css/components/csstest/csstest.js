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
    display: block;
    font-size: 1em;
}

span.bigger {
    font-size: 1.5em;
}

#content {
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    padding: 0em 1.5em 2em 1.5em;
    margin: 2em;
    height: 100%;
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
}

@media screen and (min-width: 768px) {
    :host {
        font-size: 1.5em;
    }
    #content {
        color: #fff;
    }
}

/* PRACTICE 1.a: Try rem to see the difference and inspect the default user-agent stylesheet as well */
span.bigger {
}

/* PRACTICE 1.b: width - Make it full width */
:host {
}
/* PRACTICE 1.b: height - Just by manipulating the height property, make it full height and resize on view */
#content {
}
/* PRACTICE: 1.b: height - Make it full height */
#example {
}

/* PRACTICE: 2.a: input - Let's style an input with 'Yes' / 'No' toggling checkbox*/
label input[type='checkbox'] + span {
    cursor: pointer
}

/* PRACTICE: 2.b: overlay - Let's create an opaque overlay */
#example:before {
}

</style>

<div id='content' lang='en'> <!-- PRACTICE: BONUS - Add attribute lang='fr 'to test the pseudo class selector -->
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
