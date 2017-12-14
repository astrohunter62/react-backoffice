import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

const styles = theme => ({
  button: {
    position: 'fixed',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3,
  },
})

const AddButton = ({ handleClick, classes }) => {
  return (
    <Button
      fab
      color="accent"
      aria-label="add"
      className={classes.button}
      onClick={handleClick}
    >
      <AddIcon />
    </Button>
  )
}

AddButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddButton)
