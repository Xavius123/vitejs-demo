import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Profile from './profile.component';

describe('profile Component', () => {
    test('should render without crashing', () => {
        render(<Profile />);

        expect(screen.getByTestId('profile-component')).toBeDefined();
    });
});
