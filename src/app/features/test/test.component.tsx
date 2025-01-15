import { ReactElement } from 'react';
import styles from './test.module.scss';
import { Color } from '@enums/color.enum';

interface TestComponentProps {
    color?: Color;
    isRed: boolean;
    text: string;
}

export const TestComponent = (props: TestComponentProps): ReactElement => {
    const { color, isRed = false, text } = props;
    console.log(color, isRed);

    return (
        <div className={styles.testComponent} data-testid="test-component">
            {text}
        </div>
    );
};
