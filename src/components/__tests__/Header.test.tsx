import { afterEach, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Header from '../../layout/header/Header'

test('Should show the app logo', () => {
  afterEach(cleanup)

  render(<Header/>)
  screen.getByRole('img', { name: 'App logo' })
})

test('Should show the option theme change', () => {
  render(<Header/>)
  screen.getByRole('img', { name: 'Change theme' })
})

test('Should show the user image', () => {
  render(<Header/>)
  screen.getByRole('img', { name: 'User image' })
})
