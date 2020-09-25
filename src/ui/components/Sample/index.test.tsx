import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import { Sample } from './'

describe('Component/Sample', () => {
  test('should text equal "Hello Dev"', () => {
    const { getByText } = render(<Sample />)

    const linkElement = getByText(/Hello Dev/i)

    expect(linkElement).toBeTruthy()
  })
  test('should testid equal "title"', () => {
    const { getByTestId } = render(<Sample />)

    const label = getByTestId(/title/)

    expect(label).toBeTruthy()
  })

  test('should exists "arial-label"', () => {
    const { getByLabelText } = render(<Sample />)

    const element = getByLabelText(/title/)

    expect(element).toBeTruthy()
  })

  test('should click in "Button"', () => {
    const onClick = jest.fn()

    const { getByTestId } = render(<Sample onClick={onClick} />)

    const btnElement = getByTestId(/button/)

    fireEvent.click(btnElement)

    expect(onClick).toHaveBeenCalled()
  })

  test('should click in "Button" and received "123"', () => {
    let called = ''

    const onClick = (text: string) => {
      called = text
    }

    const { getByTestId } = render(<Sample onClick={onClick} />)

    const btnElement = getByTestId(/button/)

    fireEvent.click(btnElement)

    expect(called).toEqual('123')
  })
})
