import React from 'react'
import { render } from '@testing-library/react'
import AllStatus from './AllStatus'
import '@testing-library/jest-dom/extend-expect'

describe('AllStatus page', () => {
    it('should have on OI message', () =>  {
        const wrapper = render(
            <AllStatus />,
          )
        expect(wrapper.getByText('Oi')).toBeInTheDocument()
    })
})