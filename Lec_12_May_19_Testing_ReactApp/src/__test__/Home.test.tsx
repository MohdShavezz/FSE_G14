import { describe, expect, it, test } from 'vitest'
import { render ,screen} from '@testing-library/react'
import Home from '../Home'

describe('Home Component', () => {
    test('Home render correctly', () => { 
        render(<Home />)
        expect(screen.findByText('Home')).toBeDefined()
    })
}) 

