import React from 'react'
import { screen, render } from '@testing-library/react'
import Login from './LoginPage'

it('Render Login Page', () => {
    render(<Login />)
    const loginButton = screen.getByRole('button')
    expect(loginButton).toBeInTheDocument()
})