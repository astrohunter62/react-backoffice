import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import NoMatch from '../../NoMatch'

import Home from '../../Home'
import homeData from './data/home'

import Menu from '../../Menu'
import menuData from './data/menu'

import Listing from '../../Listing'
import listingData from './data/listing_data'
import listingHeaders from './data/listing_headers'

import AddButton from '../../AddButton'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/"
        render={(props) => (
          <div>
            <Home
              data={homeData}
              {...props}
            />
            <Menu
              data={menuData}
              redirectTo={() => {}}
              {...props}
            />

            <Listing
              title="Christmas Time"
              data={listingData}
              headers={listingHeaders}
              orderBy="date"
              handleClick={() => { }}
            />

            <AddButton handleClick={() => {}} />
          </div>
        )}
      />

      <Route component={NoMatch} />
    </Switch>
  </Router>
)

const appElement = document.querySelector('[data-react-app]')

render(<App />, appElement)
