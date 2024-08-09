customElements.define(
  "side-bar",
  class extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = `
        <nav>
          <ul>
            <li><a href="/three.html">Three</a></li>
            <li><a href="/javascript.html">JavaScript</a></li>
          </ul>
        </nav>
       `;
    }
  }
);
