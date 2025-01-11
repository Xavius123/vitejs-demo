import { useState } from 'react';
import styles from './App.module.scss';
import { Tag } from './shared/models';
import { useImages } from './shared/hooks';

function App() {
    const [count, setCount] = useState(0);
    const [tag, setTag] = useState<Tag>({ id: 1, name: 'Tag 1' });
    const { image } = useImages();

    return (
        <div className={styles.test}>
            <div>TEST</div>
            <h1>Vite + React</h1>
            <div>
                <img src={image} className={styles.imageTest} alt="" />
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
        </div>
    );
}

export default App;
