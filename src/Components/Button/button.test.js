
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Button from '../Button/Button'

describe('Button Component', () => {
    test('Render button with the correct text', () => {
        render(<Button nombre='Contador'/> )

        const buttonElement = screen.getByText('Contador');
        expect(buttonElement).toBeInTheDocument()
    })
})

