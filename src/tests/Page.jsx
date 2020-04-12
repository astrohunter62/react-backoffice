import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

import Dashboard from '../Dashboard'
import dashboardData from './data/dashboard'

import Menu from '../Menu'
import menuData from './data/menu'

import Listing from '../Listing'
import listingData from './data/listing_data'
import listingHeaders from './data/listing_headers'

import Form from '../Form'
import formData from './data/form'

import AddButton from '../AddButton'
import BackButton from '../BackButton'

import Tabs from '../Tabs'
import tabData from './data/tabs'

const noop = () => {}

const styles = theme => ({
  headline: {
    marginTop: theme.spacing(4),
  },
})

class Page extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
  }

  constructor() {
    super()

    this.handleFormButtonClick = this.handleFormButtonClick.bind(this)
  }

  state = {
    formData,
    additionalValue: null,
  }

  componentDidMount() {
    const { formData: newFormData, additionalValue } = this.state

    newFormData[0].data[0].getAdditionalValue = value => (
      additionalValue || value
    )

    this.setState({
      formData: newFormData,
    })
  }

  handleFormButtonClick() {
    this.setState({
      additionalValue: 'New value',
    })
  }

  render() {
    const { classes, ...props } = this.props

    return (
      <Fragment>
        <Dashboard
          data={dashboardData}
          {...props}
        />

        <Typography variant="h4" className={classes.headline}>
          Listing
        </Typography>

        <Listing
          title="Christmas Time"
          data={listingData}
          headers={listingHeaders}
          orderBy="username"
          onClick={noop}
          hasLoader
          onUpdateSelection={(selection) => { console.log(selection) }}
          toolbarContent={(
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        />

        <Typography variant="h6" className={classes.headline}>
          Integrated
        </Typography>

        <Listing
          data={listingData.slice(0, 2)}
          headers={listingHeaders}
          orderBy="username"
          order="desc"
          onClick={noop}
          isIntegrated
        />

        <Typography variant="h4" className={classes.headline}>
          Form
        </Typography>

        <Form
          data={{
            text: {
              value: 'prefilled text-field',
            },
            id: {
              value: 'test-id',
            },
          }}
          form={formData}
          onSubmit={console.log}
          submitText="Save the form"
        >
          <Typography>
            This is a very special form with additional content.
          </Typography>
          <Button onClick={this.handleFormButtonClick}>
            Change First Field Value Via Function
          </Button>
        </Form>

        <Typography variant="h4" className={classes.headline}>
          Tabs
        </Typography>

        <Tabs data={tabData} />

        <Typography variant="h4" className={classes.headline}>
          Menu
        </Typography>

        <Menu
          data={menuData}
          redirectTo={noop}
          {...props}
        />

        <AddButton onClick={noop} />

        <Typography variant="h4" className={classes.headline}>
          Back Button
        </Typography>
        <BackButton url="/root" />
      </Fragment>
    )
  }
}

export default withStyles(styles)(Page)
