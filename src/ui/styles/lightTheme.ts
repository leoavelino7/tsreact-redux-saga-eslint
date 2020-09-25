import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: '#556cd6' },
    secondary: { main: '#cc4444' },
    error: { main: red.A400 },
    background: { default: '#f5f5f5' },
  },
})

export default theme
