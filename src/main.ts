import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    <header class="header">
      <h1>Luke's Studio - Vanilla</h1>
    </header>

    <nav class="sidebar">
      <ul>
        <li><a href="#">Three</a></li>
        <li><a href="#">Data Structures & Algorithms</a></li>
        <li><a href="#">Web APIs</a></li>
      </ul>
    </nav>

    <main class="main">
      <h2>Vanilla</h2>
    </main>
  </div>
`;
