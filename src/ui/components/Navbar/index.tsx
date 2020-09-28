import React from 'react'

import { Container } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import DraftsIcon from '@material-ui/icons/Drafts'

import MenuDropdown from '../MenuDropdown'

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
})

const links = [
  {
    Icon: <DraftsIcon fontSize="small" />,
    href: '/test',
    text: 'Testando',
  },
  {
    Icon: <DraftsIcon fontSize="small" />,
    href: '/',
    text: 'Sair',
  },
]

interface Props {
  onHandleSelectItem(href: string): void
}

export function Navbar({ onHandleSelectItem }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Logo
            </Typography>
            <MenuDropdown links={links} onHandleSelectItem={onHandleSelectItem} />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
