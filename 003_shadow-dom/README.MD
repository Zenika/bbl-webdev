# Brown Bag Lunch 4 Web Dev - Shadow Dom

Live coding done during session #2 on 14/02/2019.

## Lesson Plan

**Pre-requisites - very basic knowledge on web-components, JS, CSS, HTML**

We will create a modal dialog as web components using shadow DOM so as to avoid pollution/leaking in/out of CSS styles, DOM id collisions

### 1 Create a modal with the following

a) backdrop to prevent other events/interactions from happening
b) the modal dialog itself with
 - using attriute to control open and close of modal
 - slot and named slot for modal body and header text
 - ok & cancel buttons (emit events from shadow DOM to lit DOM)
c) style the web component and slots

 - style the Webcomponent using :host
 - style the slot using ::slotted

### 2 Steps

### 2.1 On the HTML
 - create the tags in the html file
 - add modal header text to named slot
 - add modal body text to slot
 - add event listener for cancel and ok from modal, and their callback functions
 - open the modal on click of button (to test the web-component)

### 2.2 On the Component JS file
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
 - style the slots [If we have time]
