import React from 'react'

import { Button } from '@material-ui/core'

import { Title } from './styles'

interface IProps {
  onClick?(text: string): void
}

const initialValues = {
  onClick() {
    return
  },
}

export const Sample: React.FC<IProps> = ({ onClick = initialValues.onClick }) => {
  function handleClick() {
    onClick('123')
  }

  return (
    <>
      <Title data-testid="title" aria-label="title">
        Hello Dev
      </Title>
      <Button data-testid="button" aria-label="button" onClick={handleClick}>
        Click me
      </Button>
    </>
  )
}
