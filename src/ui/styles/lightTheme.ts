import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: '#FFC107', light: '#DBAF46', dark: '#CCA33F' },
    secondary: { main: '#000000' },
    text: { primary: '#000000', secondary: '#150903' },
    error: { main: red.A400 },
    common: { white: '#fff', black: 'green' },
    background: { default: '#f8f8f8' },
  },
  typography: {
    htmlFontSize: 17,
  },
})

export default theme
