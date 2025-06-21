import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>About My AppSheet Program</h1>
        <p>
          Welcome! This web app explains how my AppSheet program works, its key features, and how you can use it.
        </p>
      </header>

      <section>
        <h2>What is AppSheet?</h2>
        <p>
          AppSheet is a no-code platform that lets you build powerful mobile and web apps from your data.
        </p>
      </section>

      <section>
        <h2>About My App</h2>
        <p>
          <b>[Your App Name]</b> is built to help users [explain the main goal or purpose of your AppSheet app].
        </p>
        <ul>
          <li><b>Feature 1:</b> [Describe first feature]</li>
          <li><b>Feature 2:</b> [Describe second feature]</li>
          <li><b>Feature 3:</b> [Describe third feature]</li>
        </ul>
      </section>

      <section>
        <h2>How It Works</h2>
        <ol>
          <li>[Step 1: e.g., User logs in]</li>
          <li>[Step 2: e.g., User fills out a form]</li>
          <li>[Step 3: e.g., App processes the data]</li>
        </ol>
      </section>

      <section>
        <h2>Screenshots</h2>
        <img src="screenshot1.png" alt="AppSheet Screenshot 1" style={{ width: "300px" }} />
        <img src="screenshot2.png" alt="AppSheet Screenshot 2" style={{ width: "300px" }} />
        {/* Replace with actual images or links */}
      </section>

      <footer>
        <p>
          Built by [Your Name]. Want to try the app? <a href="[Your AppSheet App URL]">Click here</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;