# Brown Bag Lunch 4 Web Dev - Shadow Dom

Live coding done during session #2 on 14/02/2019.

## Lesson Plan

**Pre-requisites - very basic knowledge on web-components, JS, CSS, HTML**

We will create a modal dialog as web components using shadow DOM so as to avoid pollution/leaking in/out of CSS styles, DOM id collisions.
We will start with an empty modal.js file for that.

### 1 Create an HTML-based modal dialog with:

#### a) a backdrop to prevent other events/interactions from happening
#### b) the modal dialog itself with
 - an 'open' attribute to control the state of the modal
 - a named slot and a default slot for the modal title and body
 - ok & cancel buttons (emit events from shadow DOM to lit DOM)
#### c) an embedded style tag
 - style the Web Component using :host
 - style the slot using ::slotted

### 2 Steps

### 2.1 In helloworld.js
 - append a modal dialog at the end of the document body if it does not exist
 - add modal header text to named slot ("Hello!")
 - add modal body text to slot ("Hello World!")
 - add event listener for cancel and ok from modal, and their callback functions
 - update the targeted name for the Hello inside the modal
 - open the modal on click of button

### 2.2 In modal.js
 - attach shadow
 - add innerhtml
  - styles
    - use opacity to control visibility
    - use an attribute (named "opened" in our example) to control opacity
    - set pointer-events to enable or disable mouse click events
  - backdrop div
  - modal div
    - named slot
    - slot
    - button area
 - add eventListener for confirm and ok from modal buttons, and their callback functions
  - emit the events
 - create open and close functions
 - style the slots [If you have time]
