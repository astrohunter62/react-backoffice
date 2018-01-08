import { create, SheetsRegistry } from 'jss'
import { jssPreset, createMuiTheme } from 'material-ui/styles'
import { blueGrey, orange } from 'material-ui/colors'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: orange,
  },
})

// Configure JSS
const jss = create(jssPreset())
jss.options.createGenerateClassName = createGenerateClassName

export const sheetsManager = new Map()

export default function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  }
}
