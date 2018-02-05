import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'

import DisabledIcon from 'material-ui-icons/Lock'

const styles = theme => ({
  root: {
    cursor: 'pointer',
  },
  content: {
    paddingBottom: `${theme.spacing.unit * 2}px !important`,
  },
  avatar: {
    float: 'left',
    marginRight: theme.spacing.unit * 2,
    backgroundColor: theme.palette.secondary.dark,
  },
  title: {
    marginBottom: 0,
  },
  disabled: {
    opacity: 0.75,
    pointerEvents: 'none',
    filter: 'grayscale(30%)',
  },
  icon: {
    float: 'right',
    opacity: 0.5,
  },
})

const HomeCard = ({
  title,
  description,
  handleClick,
  icon: Icon,
  disabled,
  classes,
}) => {
  const rootClasses = classNames({
    [classes.root]: true,
    [classes.disabled]: disabled,
  })

  return (
    <Card onClick={handleClick} className={rootClasses}>
      <CardContent className={classes.content}>
        {disabled ? (
          <DisabledIcon className={classes.icon} />
        ) : null}

        {Icon ? (
          <Avatar className={classes.avatar}>
            <Icon />
          </Avatar>
        ) : null}

        <Typography type="headline" className={classes.title} component="h2">
          {title}
        </Typography>

        {description ? (
          <Typography type="body1">{description}</Typography>
        ) : null}
      </CardContent>
    </Card>
  )
}

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.func,
  disabled: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

HomeCard.defaultProps = {
  description: null,
  icon: null,
  disabled: false,
}

export default withStyles(styles)(HomeCard)
