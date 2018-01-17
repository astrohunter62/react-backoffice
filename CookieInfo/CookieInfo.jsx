import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import withStyles from 'material-ui/styles/withStyles'
import Button from 'material-ui/Button/Button'

import Cookie from './Cookie'

const styles = theme => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3000,
    display: 'flex',
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    transform: 'translate(0, -100%)',
    opacity: 0,
    transition: 'transform 0.25s, opacity 0s 0.25s',
  },
  rootActive: {
    transform: 'translate(0, 0)',
    opacity: 1,
  },
  content: {
    display: 'flex',
    flex: 1,
    opacity: 1,
    alignItems: 'center',
  },
  button: {
    float: 'right',
  },
})

class CookieInfo extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onCookieInfoAccept()

    Cookie.setCookie(true)
  }

  render() {
    const {
      cookieInfoOpen,
      buttonText,
      classes,
      children,
    } = this.props
    const className = classNames({
      [classes.root]: true,
      [classes.rootActive]: cookieInfoOpen,
    })

    return (
      <div className={className}>
        <div className={classes.content}>
          {children}
        </div>

        <Button className={classes.button} onClick={this.handleClick}>
          {buttonText}
        </Button>
      </div>
    )
  }
}

CookieInfo.propTypes = {
  cookieInfoOpen: PropTypes.bool,
  onCookieInfoAccept: PropTypes.func,
  buttonText: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

CookieInfo.defaultProps = {
  cookieInfoOpen: false,
  onCookieInfoAccept: () => {},
  buttonText: 'Accept',
}

export default withStyles(styles)(CookieInfo)
