import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  AddIcon,
  withStyles,
} from '@material-ui/core'

const styles = theme => ({
  button: {
    position: 'fixed',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3,
  },
})

const AddButton = ({ onClick, classes }) => (
  <Button
    variant="fab"
    color="secondary"
    aria-label="add"
    className={classes.button}
    onClick={onClick}
  >
    <AddIcon />
  </Button>
)

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(AddButton)
