import { useState } from "react";
import styles from "./App.module.scss";
import "@/scss/main.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.test}>
      <div>TEST</div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
