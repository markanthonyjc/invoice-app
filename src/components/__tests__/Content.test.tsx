import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Content from '../../pages/home/Content'

test('Should exist the <main/> element', () => {
  render(<Content/>)
  screen.getByRole('main', {})
})
