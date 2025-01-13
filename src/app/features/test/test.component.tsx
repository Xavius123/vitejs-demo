import { ReactElement } from 'react';
import styles from './test.module.scss';
import { Color } from '../../shared/enums';

interface TestComponentProps {
    color?: Color;
    isRed: boolean;
}

export const TestComponent = (props: TestComponentProps): ReactElement => {
    const { color, isRed = false } = props;
    console.log(color, isRed);
    const TestComponent = 'TEST Component';

    return <div className={styles.testComponent}>{TestComponent}</div>;
};
