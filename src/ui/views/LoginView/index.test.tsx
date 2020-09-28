import React from 'react'

import { fireEvent, render } from '@testing-library/react'

import { localesMap } from '../../locales'
import { LoginView } from './'

const INITIAL_POSITION = 0
const defaultLanguage: string = navigator.language.split(/[-_]/)[INITIAL_POSITION]
const messageLanguage = localesMap.get(defaultLanguage)

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}))

describe('View/LoginView', () => {
  test('should has field with name "username"', () => {
    const { getByLabelText } = render(<LoginView changeLanguage={messageLanguage} />)

    const linkElement = getByLabelText(/username/)

    expect(linkElement).toBeTruthy()
  })

  test('should has field with name "password"', () => {
    const { getByLabelText } = render(<LoginView changeLanguage={messageLanguage} />)

    const linkElement = getByLabelText(/password/)

    expect(linkElement).toBeTruthy()
  })

  test('should has login button', () => {
    const { getByLabelText } = render(<LoginView changeLanguage={messageLanguage} />)

    const buttonElement = getByLabelText(/btnLogin/)

    expect(buttonElement).toBeTruthy()
  })

  test('should has event submit in login form', () => {
    const { getByLabelText } = render(<LoginView changeLanguage={messageLanguage} />)

    const formElement = getByLabelText(/formLogin/)

    const event = fireEvent.click(formElement)

    expect(event).toBeTruthy()
  })
})
