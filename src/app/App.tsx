import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Tag } from '@shared/models';
import { useImages } from '@shared/hooks';
import { TestComponent } from '@features/test/test.component';
import Profile from '@features/settings/profile/profile.component';

function App() {
    const [count, setCount] = useState(0);
    const [tag, setTag] = useState<Tag>({ id: 1, name: 'Tag 1' });
    const { image } = useImages();

    useEffect(() => {
        console.log('tag', tag);
        setTag({ id: 2, name: 'Tag 2' });
    }, []);

    return (
        <div className={styles.test}>
            <h1>Vite + React</h1>
            <TestComponent isRed text="NAF Connect 2" />
            <Profile />
            <div>
                <img src={image} className={styles.imageTest} alt="test" />
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
        </div>
    );
}

export default App;
