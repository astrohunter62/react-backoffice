import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import Home from '../../Home'

import homeData from './data/home'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/"
        render={(props) => (
          <Home
            data={homeData}
            {...props}
          />
        )}
      />
    </Switch>
  </Router>
)

const appElement = document.querySelector('[data-react-app]')

render(<App />, appElement)
