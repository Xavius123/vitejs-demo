import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import { TestComponent } from './test.component';

describe('Test Describe', () => {
    test('Test Test Component', async () => {
        render(<TestComponent isRed text="NAF Connect 2" />);

        expect(screen.getAllByTestId('test-component')).toBeDefined();
    });
});
