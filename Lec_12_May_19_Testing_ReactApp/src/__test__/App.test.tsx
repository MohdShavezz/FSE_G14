import { describe, expect, it, test } from 'vitest'
import { render ,screen} from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
    test('App render correctly', () => { 
        render(<App />)
    })
    test('Check Navbar List', () => {
        expect(screen.findByText('Home')).toBeDefined()
        expect(screen.findByText('Counter')).toBeDefined()
        expect(screen.findByText('Users')).toBeDefined()
    })
}) 