import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Counter from '../Components/Counter'
import userEvent from '@testing-library/user-event'

describe('Counter Component', () => {
    test('Counter render correctly', () => {
        render(<Counter />)
        expect(screen.getByText('Counter:')).toBeInTheDocument()
    })
    it('increments count on click', async () => {
        render(<Counter />)
        const button = screen.getByText('INC')
        await userEvent.click(button)
        await userEvent.click(button)
        expect(screen.getByText('Count: 2')).toBeInTheDocument()
    })
    it('decrements count on click', async () => {
        render(<Counter />)
        const button = screen.getByText('DEC')
        await userEvent.click(button)
        await userEvent.click(button)
        expect(screen.getByText('Count: -2')).toBeInTheDocument()
    })
    it('resets count on click', async () => {
        render(<Counter />)
        const button = screen.getByText('RESET')
        await userEvent.click(button)
        expect(screen.getByText('Count: 0')).toBeInTheDocument()
    })
}) 