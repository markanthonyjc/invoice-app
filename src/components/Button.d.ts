enum Color {
  Primary = 'Primary'
}

interface Props {
  name: string
  icon: string
  color: Color
  clickHandler?: (event: MouseEventHandler<HTMLButtonElement>) => void
}

export { Color, type Props }
