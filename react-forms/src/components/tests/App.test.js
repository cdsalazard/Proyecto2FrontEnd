import React from 'react';
import {render } from '@testing-library/react';
import App from '../../App';



test('renders gretting correctly', () => {
           render(<App/>);
           const greetingelement = getByText(/Hello/i);
           expect(greetingelement).toBeInTheDocument();
    });
