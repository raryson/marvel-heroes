import React from 'react'
import { render } from '@testing-library/react'
import Character from './Character'
import '@testing-library/jest-dom/extend-expect'

describe('Character', () => {
    it('should have on OI message', () =>  {
        const wrapper = render(
            <Character />,
          )
        expect(wrapper.getByText('Oi')).toBeInTheDocument()
    })
})