customElements.define(
  "website-header",
  class extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = `
         <header>
            <h1><a href="index.html">Luke's Vanilla Studio</a></h1>
         </header>
       `;
    }
  }
);
